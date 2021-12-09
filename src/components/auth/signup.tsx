import Link from 'next/link';
import TextField from '@components/text-field/text-field';

const SignupForm = () => {
    return (
        <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
            <a href="#" className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
                {/* <img src="/images/logo.svg" className="h-10 mr-4" alt="Windster Logo"> */}
                <span className="self-center text-2xl font-bold whitespace-nowrap">Windster</span> 
            </a>

            <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                <div className="p-6 sm:p-8 lg:p-16 space-y-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Create Free Account
                    </h2>

                    <form className="mt-8 space-y-3" action="#">
                        <div>
                            <TextField 
                                id="name" 
                                name="name" 
                                type="text" 
                                label="Your Name" 
                                placeholder="John Doe" 
                                onChange={(event) => console.log(event.target.value)}
                            />
                        </div>
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
                                id="password" 
                                name="password" 
                                type="password" 
                                label="Password" 
                                placeholder="********" 
                                onChange={(event) => console.log(event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField 
                                id="confirmPass" 
                                name="confirmPass" 
                                type="password" 
                                label="Confirm Password" 
                                placeholder="********" 
                                onChange={(event) => console.log(event.target.value)}
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" name="remember" 
                                type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 
                                focus:ring-cyan-200 h-4 w-4 rounded" required />
                            </div>
                            <div className="text-sm ml-3">
                                <label htmlFor="remember" className="font-medium text-gray-900">
                                    I accept the <a href="#" className="text-teal-500 
                                    hover:underline">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" style={{backgroundColor: 'rgba(8,145,178,var(--tw-bg-opacity))'}} 
                         className="text-white bg-cyan-600 hover:bg-cyan-700 inline-flex 
                        focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base 
                        px-5 py-3 w-full sm:w-auto text-center">
                            Create account
                            <svg className="mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <div className="text-sm font-medium text-gray-500">
                            Already have an account? <Link href="/auth/login">
                                <a className="text-teal-500 hover:underline">
                                    Login
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;