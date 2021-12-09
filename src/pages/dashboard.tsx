import SideBar from '@layouts/sidebar/sidebar';
import Header from '@layouts/header/header';
import TransactionSummary from '@features/dashboard/summary/summary';

const Dashboard = () => {
    return (
        <>
            <Header/>
            <div className="flex overflow-hidden bg-white pt-16">
                <SideBar />
                
                <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <main>
                        <TransactionSummary />
                    </main>
                </div>

            </div>
        </>
    )
}

export default Dashboard;