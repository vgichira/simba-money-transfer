import LoginForm from '@components/auth/login';

type LoginProps = {
    csrfToken: string
}

const Login: React.FC<LoginProps> = ({ csrfToken }) => {
    return <LoginForm csrfToken={csrfToken} />;
}

export default Login;