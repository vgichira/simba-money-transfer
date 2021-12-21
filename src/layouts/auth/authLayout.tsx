import SEO from '@components/seo/seo';

type AuthLayoutProps = {
    title: string;
    component: JSX.Element;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, component }) => {
    return (
        <>
            <SEO title={`Simba Transfer :: ${title}`}/>
            <div className="bg-gray-50">
            {component}
            </div>
        </>
    )
}

export default AuthLayout;