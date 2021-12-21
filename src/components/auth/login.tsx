import Router from 'next/router';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signIn } from 'next-auth/react';
import TextField from '@components/forms/text-field/text-field';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const initialValues = {
    email: '',
    password: '',
}

type LoginProps = {
    csrfToken: string
}

const LoginForm: React.FC<LoginProps> = ({ csrfToken }) => {
    const loginUser = async (
        values, 
        { 
            resetForm, 
            setStatus, 
            setSubmitting, 
            setErrors
        }) => {
            const { email, password } = values;

            setSubmitting(true);

            const response = await signIn("credentials", {
                email, password, callbackUrl: `${window.location.origin}`, redirect: false }
            );

            if(response.error) {
                setErrors({submit: response.error.split(": ")[1]});
                return;
            }

            Router.push(response.url);

            resetForm();
            setStatus({ sent: true });
            setSubmitting(false);
    };

    return (
        <div className="mx-auto md:h-screen flex flex-col 
        justify-center items-center px-6 pt-8 pt:mt-0">
            <a href="#" className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
                {/* <img src="/images/logo.svg" className="h-10 mr-4" alt="Windster Logo"> */}
                <span className="self-center text-2xl font-bold whitespace-nowrap">Windster</span> 
            </a>

            <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                <div className="p-6 sm:p-8 lg:p-16 space-y-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Account Login
                    </h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={loginUser}
                        validationSchema={validationSchema}
                    >
                    {({
                        errors, 
						handleBlur, 
						handleChange, 
						handleSubmit, 
						isSubmitting, 
						touched, 
						values, 
                    }) => (
                        <form 
                            className="mt-8 space-y-6" 
                            onSubmit={handleSubmit}
                        >
                            <div>
                            {errors && errors.submit && (<p className="mt-2 text-sm text-red-500 
                            dark:text-gray-400">{errors.submit}</p>)}
                                <TextField 
                                    id="csrfToken" 
                                    name="csrf_token" 
                                    type="hidden" 
                                    onChange={handleChange} 
                                    defaultValue={csrfToken} 
                                />
                                <TextField 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    error={touched.email && errors.email}
                                    label="Your Email" 
                                    placeholder="johndoe@company.com" 
                                    onBlur={handleBlur}
                                    onChange={handleChange} 
                                    value={values.email} 
                                />
                            </div>
                            <div>
                                <TextField 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    label="Your Password" 
                                    placeholder="********" 
                                    error={touched.password && errors.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange} 
                                    value={values.password}
                                />
                            </div>
                            <button type="submit" style={{backgroundColor: 'rgba(8,145,178,var(--tw-bg-opacity))'}} 
                            className="text-white focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base 
                            px-5 py-3 w-full sm:w-auto text-center inline-flex"
                            disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    "Loading..."
                                ) : (
                                <>
                                    Login to your account
                                    <svg className="mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                        clipRule="evenodd"></path>
                                    </svg>
                                </>
                                )}
                            </button>
                            <div className="text-sm font-medium text-gray-500">
                                Not registered? <Link href="/auth/signup"><a className="text-teal-500 hover:underline">Create account</a></Link>
                            </div>
                        </form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;