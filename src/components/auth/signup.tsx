import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@components/forms/text-field/text-field';

const initialValues = {
    name : '',
    email : '',
    password : '',
    confirm_pass: '',
    terms: false,
}

const SignupForm = () => {
    const newUser = () => {
        return
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password too short"),
        confirm_pass: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords do not match")
            .required("Password is required")
            .min(4, "Password too short")
    });

    return (
        <div className="mx-auto md:h-screen flex flex-col 
        justify-center items-center px-6 pt-8 pt:mt-0">
            <a href="#" className="text-2xl font-semibold flex 
            justify-center items-center mb-8 lg:mb-10">
                {/* <img src="/images/logo.svg" className="h-10 mr-4" alt="Windster Logo"> */}
                <span className="self-center text-2xl font-bold whitespace-nowrap">Windster</span> 
            </a>

            <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                <div className="p-6 sm:p-8 lg:p-16 space-y-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Create Free Account
                    </h2>
                    <Formik
                        onSubmit={newUser}
                        initialValues={initialValues}
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
                    }
                    ) => (
                        <form 
                        className="mt-8 space-y-3" 
                        onSubmit={handleSubmit}
                        >
                            <div>
                                <TextField 
                                    id="name" 
                                    name="name" 
                                    type="text" 
                                    label="Your Name" 
                                    placeholder="John Doe" 
                                    error={touched.name && errors.name} 
                                    value={values.name}
                                    onBlur={handleBlur} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div>
                                <TextField 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    label="Your Email" 
                                    placeholder="johndoe@company.com" 
                                    error={touched.email && errors.email} 
                                    onBlur={handleBlur} 
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </div>
                            <div>
                                <TextField 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    label="Password" 
                                    placeholder="********" 
                                    error={touched.password && errors.password} 
                                    onBlur={handleBlur} 
                                    onChange={handleChange}
                                    value={values.password}
                                />
                            </div>
                            <div>
                                <TextField 
                                    id="confirm_pass" 
                                    name="confirm_pass" 
                                    type="password" 
                                    label="Confirm Password" 
                                    placeholder="********" 
                                    error={touched.confirm_pass && errors.confirm_pass} 
                                    onBlur={handleBlur} 
                                    onChange={handleChange}
                                    value={values.confirm_pass}
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" name="terms" 
                                    type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 
                                    focus:ring-cyan-200 h-4 w-4 rounded"
                                    checked={values.terms}
                                    onChange={handleChange}
                                    required 
                                    />
                                </div>
                                <div className="text-sm ml-3">
                                    <label htmlFor="terms" className="font-medium text-gray-900">
                                        I accept the <a href="#" className="text-teal-500 
                                        hover:underline">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" style={{backgroundColor: 'rgba(8,145,178,var(--tw-bg-opacity))'}} 
                            className="text-white bg-cyan-600 hover:bg-cyan-700 inline-flex 
                            focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base 
                            px-5 py-3 w-full sm:w-auto text-center">
                                {isSubmitting ? 'Loading...' : (
                                <>
                                    Create account
                                    <svg className="mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                        clipRule="evenodd"></path>
                                    </svg>
                                </>
                                )}
                            </button>
                            <div className="text-sm font-medium text-gray-500">
                                Already have an account? <Link href="/auth/login">
                                    <a className="text-teal-500 hover:underline">
                                        Login
                                    </a>
                                </Link>
                            </div>
                        </form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;