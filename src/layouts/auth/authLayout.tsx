import SEO from '@components/seo/seo';

type AuthLayoutProps = {
    title: string
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title }) => {
    return (
        <>
            <SEO title={`Simba Transfer :: ${title}`}/>
        </>
    )
}

export default AuthLayout;