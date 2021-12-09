import LoginForm from '@components/auth/login';
import AuthBanner from '@components/auth/auth-banner';

const Login: React.FC = () => {
    return (
        <div className="h-screen flex">
            <AuthBanner />
            <div className="flex w-screen justify-center items-center bg-white">
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;