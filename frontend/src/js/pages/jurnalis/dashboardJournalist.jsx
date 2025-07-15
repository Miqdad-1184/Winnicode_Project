import '../../../css/journalist.css';
import NavbarJournalist from '../../components/layout/navbarJournalist.jsx';
import DashboardCard from '../../components/card/dashboardCard.jsx';
import CommentChart from '../../components/chart/commentChart.jsx';
import LineChart from '../../components/chart/lineChart.jsx';
import { FaComment, FaNewspaper, FaHeart, FaEye, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function DashboardJournalist() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='journalistContainer'>
      <button className="burgerButton" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars color='black' />
      </button>
      <aside className={menuOpen ? 'show' : ''}>
        <button className="closeSidebar" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <NavbarJournalist />
      </aside>
      <main className="journalist">
        <h2>Dashboard</h2>
        <div className="dashboardCardContainer">
          <DashboardCard label="Total Berita" count="100" icon={<FaNewspaper />} />
          <DashboardCard label="Total Komentar" count="100" icon={<FaComment />} />
          <DashboardCard label="Total Suka" count="100" icon={<FaHeart />} />
          <DashboardCard label="Total Dilihat" count="100" icon={<FaEye />} />
        </div>
        <div className='journalistChartContainer'>
          <LineChart
            title="Pertumbuhan Pengguna"
            labels="{bulan}"
            datasetLabel="User Baru"
            dataValues={[10, 20, 15, 25, 30, 40]}
            color="#3A5B22"
          />
          <LineChart
            title="Jumlah Berita Diposting"
            labels="{bulan}"
            datasetLabel="Berita"
            dataValues={[5, 15, 10, 20, 35, 45]}
            color="#235789"
          />
          <LineChart
            title="Jumlah Berita Dibaca"
            labels="{bulan}"
            datasetLabel="Berita"
            dataValues={[5, 15, 10, 20, 35, 45]}
            color="#235777"
          />
          <CommentChart />
        </div>
      </main>
    </div>
  );
}
