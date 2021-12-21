import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const withAuth = (WrappedComponent: React.FC) => {
	return function WrappedWithAuth(props: any) {
        const router = useRouter();
        const { data: session, status } = useSession();

		if (typeof window !== "undefined") {
            if (status == 'loading'){
                return null;
            }

            if(!session){
                router.push({
                    pathname: '/auth/login',
                    query: {
                        _next: router.asPath
                    }
                })

                return null;
            }

			return <WrappedComponent {...props} />;
		}

        return null;
	};
};

export default withAuth;