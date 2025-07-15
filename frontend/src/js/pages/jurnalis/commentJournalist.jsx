import '../../../css/journalist.css';
import NavbarJournalist from '../../components/layout/navbarJournalist.jsx';
import HeaderTable from '../../components/layout/headerTable.jsx';
import Search from '../../components/input/search.jsx';
import { FaTrash, FaEye, FaBars, FaTimes } from 'react-icons/fa';
import PaginationDashboard from '../../components/button/paginationDashboard.jsx';
import React, { useState } from 'react';

export default function CommentJournalist() {
  const newsData = [
    { id: 1, title: "Berita Pertama", author: "Miqdad", date: "2025-06-01", status: "Published" },
    { id: 2, title: "Berita Kedua", author: "Rizki", date: "2025-06-05", status: "Draft" },
    { id: 3, title: "Berita Ketiga", author: "Ani", date: "2025-06-07", status: "Published" },
    { id: 4, title: "Berita Keempat", author: "Budi", date: "2025-06-09", status: "Draft" },
    { id: 5, title: "Berita Kelima", author: "Siti", date: "2025-06-10", status: "Published" },
    { id: 6, title: "Berita Keenam", author: "Joko", date: "2025-06-11", status: "Published" },
    { id: 7, title: "Berita Ketujuh", author: "Lina", date: "2025-06-12", status: "Draft" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = newsData.slice(startIndex, endIndex);

  const deleteNews = (id) => {
    console.log(`Menghapus berita dengan ID: ${id}`);
  };

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
        <h2>Komentar</h2>
        <div className="search"><Search /></div>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th colSpan='7'>
                  <HeaderTable title='List Komentar' />
                </th>
              </tr>
              <tr>
                <th></th>
                <th>Judul</th>
                <th>Komentar</th>
                <th>Pengguna</th>
                <th>Tanggal</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td>{item.title}</td>
                  <td>Komentar</td>
                  <td>Pengguna</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                  <td>
                    <button onClick={() => deleteNews(item.id)} className='trashButton'><FaTrash /></button>
                    <button className='lookButton'><FaEye /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="7">
                  <PaginationDashboard
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    startIndex={startIndex}
                    endIndex={endIndex}
                    totalItems={newsData.length}
                  />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </div>
  );
}
