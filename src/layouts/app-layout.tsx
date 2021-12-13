import SEO from '@components/seo/seo';
import SideBar from '@layouts/sidebar/sidebar';
import Header from '@layouts/header/header';
import Footer from '@layouts/footer/footer';

type LayoutProps = {
    title: string,
}

const Layout: React.FC<LayoutProps>= ({ title, children }) => {
    return(
        <>
            <SEO title={title} />
            <Header />
            <div className="flex overflow-hidden bg-white pt-16">
                <SideBar/>
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop">

                </div>

                <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout;