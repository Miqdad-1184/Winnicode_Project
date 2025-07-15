import '../../../css/dashboardAdmin.css';
import NavbarAdmin from '../../components/layout/navbarAdmin.jsx';
import HeaderTable from '../../components/layout/headerTable.jsx';
import Search from '../../components/input/search.jsx';
import { FaTrash, FaEye, FaBars, FaTimes } from 'react-icons/fa';
import PaginationDashboard from '../../components/button/paginationDashboard.jsx';
import { useState } from 'react';

export default function CommentAdmin() {
  const comment = [
    { id: 1, user: "miqdad", berita: "Berita Tentang Lingkungan", komentar: "Sangat informatif dan membuka wawasan!", tanggal: "2025-06-01" },
    { id: 2, user: "fauzan", berita: "Berita Teknologi Terbaru", komentar: "Teknologi ini memang revolusioner.", tanggal: "2025-06-02" },
    { id: 3, user: "ahmad", berita: "Berita Politik Hari Ini", komentar: "Perlu dianalisis lebih dalam.", tanggal: "2025-06-03" },
    { id: 4, user: "nurul", berita: "Berita Pendidikan", komentar: "Sistem pendidikan kita memang butuh perubahan.", tanggal: "2025-06-04" },
    { id: 5, user: "dina", berita: "Berita Kesehatan Global", komentar: "Saya baru tahu soal fakta ini, terima kasih!", tanggal: "2025-06-05" },
    { id: 6, user: "reza", berita: "Berita Olahraga Hari Ini", komentar: "Permainannya sangat seru, saya tonton langsung!", tanggal: "2025-06-06" },
    { id: 7, user: "salsa", berita: "Berita Hiburan Terbaru", komentar: "Film yang disebutkan sangat bagus, saya rekomendasikan!", tanggal: "2025-06-07" },
    { id: 8, user: "zaki", berita: "Berita Ekonomi Nasional", komentar: "Angka inflasi cukup mengejutkan.", tanggal: "2025-06-08" },
    { id: 9, user: "ilham", berita: "Berita Bencana Alam", komentar: "Mari kita bantu korban semampu kita.", tanggal: "2025-06-09" },
    { id: 10, user: "lisa", berita: "Berita Dunia Hari Ini", komentar: "Berita seperti ini harus lebih banyak diberitakan.", tanggal: "2025-06-10" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(comment.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = comment.slice(startIndex, endIndex);

  const [menuOpen, setMenuOpen] = useState(false);

  const deleteNews = (id) => {
    console.log("Deleting news with ID:", id);
  };

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
        <h2>Komentar</h2>
        <div className="search"><Search /></div>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th colSpan='6'>
                  <HeaderTable title='List Komentar' />
                </th>
              </tr>
              <tr>
                <th></th>
                <th>Komentar</th>
                <th>User</th>
                <th>Berita</th>
                <th>Tanggal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td>{item.komentar}</td>
                  <td>{item.user}</td>
                  <td>{item.berita}</td>
                  <td>{item.tanggal}</td>
                  <td>
                    <button onClick={() => deleteNews(item.id)} className='trashButton'><FaTrash /></button>
                    <button className='lookButton'><FaEye /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6">
                  <PaginationDashboard
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    startIndex={startIndex}
                    endIndex={endIndex}
                    totalItems={comment.length}
                  />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
