import { useRouter } from 'next/router';
import { getCsrfToken } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import Login from '@features/auth/login';
import SignUp from '@features/auth/signup';
import AuthLayout from '@layouts/auth/authLayout';

type AuthPageProps = {
    csrfToken: string
}

const AuthPage:React.FC<AuthPageProps> = (props) => {
    const router = useRouter();

    let component = null;

    const { authType } = router.query

    switch(authType) {
        case "signup":
            component = <SignUp />;
            break;
        default:
            component = <Login csrfToken={props.csrfToken} />;
    }

    return <AuthLayout title="Account Login" component={component} {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        }
    }
}

export default AuthPage;