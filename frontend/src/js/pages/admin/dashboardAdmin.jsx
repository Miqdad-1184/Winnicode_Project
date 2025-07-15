import { useState } from 'react';
import '../../../css/dashboardAdmin.css';
import NavbarAdmin from '../../components/layout/navbarAdmin.jsx';
import DashboardCard from '../../components/card/dashboardCard.jsx';
import UserChart from '../../components/chart/userChart.jsx';
import CommentChart from '../../components/chart/commentChart.jsx';
import LineChart from '../../components/chart/lineChart.jsx';
import { FaComment, FaNewspaper, FaUser, FaTags, FaBars, FaTimes } from 'react-icons/fa';

export default function DashboardAdmin() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='AdminContainer'>
      <button className="burgerButton" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars color='black' />
      </button>
      <aside className={menuOpen ? 'show' : ''}>
        <button className="closeSidebar" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <NavbarAdmin />
      </aside>

      <div className="admin">
        <h2>Dashboard</h2>
        <div className="dashboardCardContainer">
          <DashboardCard label="Total Berita" count="100" icon={<FaNewspaper />} />
          <DashboardCard label="Total Pengguna" count="100" icon={<FaUser />} />
          <DashboardCard label="Total Komentar" count="100" icon={<FaComment />} />
          <DashboardCard label="Total Kategori" count="100" icon={<FaTags />} />
        </div>
        <div className='adminChartContainer'>
          <LineChart title="Pertumbuhan Pengguna" labels="{bulan}" datasetLabel="User Baru" dataValues={[10, 20, 15, 25, 30, 40]} color="#3A5B22" />
          <LineChart title="Jumlah Berita Diposting" labels="{bulan}" datasetLabel="Berita" dataValues={[5, 15, 10, 20, 35, 45]} color="#235789" />
          <UserChart />
          <CommentChart />
        </div>
      </div>
    </div>
  );
}
