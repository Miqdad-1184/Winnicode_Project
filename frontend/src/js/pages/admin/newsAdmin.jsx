import '../../../css/dashboardAdmin.css';
import NavbarAdmin from '../../components/layout/navbarAdmin.jsx';
import HeaderTable from '../../components/layout/headerTable.jsx';
import Search from '../../components/input/search.jsx';
import { FaTrash, FaBars, FaTimes } from 'react-icons/fa';
import PaginationDashboard from '../../components/button/paginationDashboard.jsx';
import React, { useState } from 'react';

export default function NewsAdmin() {
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
    const itemsPerPage = 8;
    const totalPages = Math.ceil(newsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = newsData.slice(startIndex, endIndex);

    const [menuOpen, setMenuOpen] = useState(false);

    const deleteNews = (id) => {
        console.log(`Menghapus berita dengan ID: ${id}`);
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
                <h2>Berita</h2>
                <div className="search"><Search /></div>
                <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th colSpan='6'>
                                <HeaderTable title='List Berita' />
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Judul</th>
                            <th>Penulis</th>
                            <th>Tanggal</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item) => (
                            <tr key={item.id}>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.date}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button onClick={() => deleteNews(item.id)} className='trashButton'>
                                        <FaTrash />
                                    </button>
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
                                    totalItems={newsData.length}
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
