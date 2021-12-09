import SignupForm from '@components/auth/signup';
import AuthBanner from '@components/auth/auth-banner';

const SignUp: React.FC = () => {
    return (
        <div className="h-screen flex">
            <AuthBanner/>
            <div className="flex w-screen justify-center items-center bg-white">
                <SignupForm />
            </div>
        </div>
    );
}

export default SignUp;