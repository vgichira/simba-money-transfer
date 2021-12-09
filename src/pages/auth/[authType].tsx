import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Login from '@features/auth/login';
import SignUp from '@features/auth/signup';

const AuthPage: NextPage = () => {
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

    return component
}

export default AuthPage;