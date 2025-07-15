import '../../../css/dashboardAdmin.css';
import NavbarAdmin from '../../components/layout/navbarAdmin.jsx';
import Search from '../../components/input/search.jsx';
import { FaTrash, FaEye, FaEdit, FaPlus, FaBars, FaTimes } from 'react-icons/fa';
import PaginationDashboard from '../../components/button/paginationDashboard.jsx';
import HeaderTable from '../../components/layout/headerTable.jsx';
import AddCategory from '../../components/card/addCategory.jsx';
import React, { useState } from 'react';

export default function CategoryAdmin() {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const category = [
    { id: 1, kategori: "Politik", totalNews: 12, tanggal: "2025-06-01", status: "Active", deskripsi: "Berita politik" },
    { id: 2, kategori: "Ekonomi", totalNews: 9, tanggal: "2025-06-02", status: "Inactive", deskripsi: "Berita ekonomi" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(category.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = category.slice(startIndex, endIndex);

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

      <div className={`admin ${showAddCategory ? 'blur' : ''}`}>
        <div className="label">
          <h2>Kategori</h2>
          <button onClick={() => setShowAddCategory(true)}>Tambah Kategori <FaPlus /></button>
        </div>
        <div className="search"><Search /></div>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th colSpan='7'>
                  <HeaderTable title='List Kategori' />
                </th>
              </tr>
              <tr>
                <th></th>
                <th>Kategori</th>
                <th>Deskripsi</th>
                <th>Total Berita</th>
                <th>Tanggal</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td>{item.kategori}</td>
                  <td>{item.deskripsi}</td>
                  <td>{item.totalNews}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.status}</td>
                  <td>
                    <button onClick={() => deleteNews(item.id)} className='trashButton'><FaTrash /></button>
                    <button className='lookButton'><FaEye /></button>
                    <button className='lookButton'><FaEdit /></button>
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
                    totalItems={category.length}
                  />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {showAddCategory && (
        <div className="modal-overlay">
          <AddCategory onClose={() => setShowAddCategory(false)} />
        </div>
      )}
    </div>
  );
}
