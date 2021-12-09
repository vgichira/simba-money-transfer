import Link from 'next/link';
import TextField from '@components/text-field/text-field';

const LoginForm = () => {
    return (
        <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
            <a href="#" className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
                {/* <img src="/images/logo.svg" className="h-10 mr-4" alt="Windster Logo"> */}
                <span className="self-center text-2xl font-bold whitespace-nowrap">Windster</span> 
            </a>

            <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                <div className="p-6 sm:p-8 lg:p-16 space-y-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Account Login
                    </h2>
                    <form className="mt-8 space-y-6" action="#">
                        <div>
                            <TextField 
                                id="email" 
                                name="email" 
                                type="email" 
                                label="Your Email" 
                                placeholder="johndoe@company.com" 
                                onChange={(event) => console.log(event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField 
                                type="password" 
                                id="password" 
                                name="password" 
                                label="Your Password" 
                                placeholder="********" 
                                onChange={(event) => console.log(event.target.value)}
                            />
                        </div>
                        <button type="submit" style={{backgroundColor: 'rgba(8,145,178,var(--tw-bg-opacity))'}} 
                        className="text-white focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base 
                        px-5 py-3 w-full sm:w-auto text-center inline-flex">
                            Login to your account
                            <svg className="mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <div className="text-sm font-medium text-gray-500">
                            Not registered? <Link href="/auth/signup"><a className="text-teal-500 hover:underline">Create account</a></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;