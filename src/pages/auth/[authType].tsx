import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Login from '@features/auth/login';
import SignUp from '@features/auth/signup';
import AuthLayout from '@layouts/auth/authLayout';

const AuthPage: NextPage = (props) => {
    const router = useRouter();

    let component = null;

    const { authType } = router.query

    switch(authType) {
        case "signup":
            component = <SignUp />;
            break;
        default:
            component = <Login />;
    }

    return <AuthLayout title="Account Login" component={component} {...props} />
}

export default AuthPage;