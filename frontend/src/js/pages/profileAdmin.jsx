import '../../css/profileAdmin.css';
import NavbarAdmin from '../components/layout/navbarAdmin';
import DashboardCard from '../components/card/dashboardCard';
import { UserChart } from '../components/chart/userChart';
import {FaComment, FaNewspaper, FaUser, FaTags} from 'react-icons/fa'

export default function ProfileAdmin() {
    return(
        <div className='profileAdminContainer'>
            <aside>
                <NavbarAdmin/>
            </aside>
            <div className="profileAdmin">
                <div className="dashboardCardContainer">
                    <DashboardCard
                    label="Total Berita"
                    count="100"
                    icon={<FaNewspaper/>}/>
                    <DashboardCard
                    label="Total Pengguna"
                    count="100"
                    icon={<FaUser/>}/>
                    <DashboardCard
                    label="Total Komentar"
                    count="100"
                    icon={<FaComment/>}/>
                    <DashboardCard
                    label="Total Kategori"
                    count="100"
                    icon={<FaTags/>}/>
                </div>
                <div className="dashboardChartContainer">
                    <UserChart/>
                </div>
            </div>
        </div>
    )
}