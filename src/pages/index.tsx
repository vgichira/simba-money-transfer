import Layout from '@layouts/app-layout';
import DashboardData from '@features/dashboard/dashboard';
import withAuth from '@middleware/auth';

const Dashboard = () => {
    return (
        <Layout title="Dashboard">
            <DashboardData />
        </Layout>
    )
}

export default withAuth(Dashboard);