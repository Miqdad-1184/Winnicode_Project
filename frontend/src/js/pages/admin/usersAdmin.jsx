import '../../../css/dashboardAdmin.css';
import NavbarAdmin from '../../components/layout/navbarAdmin.jsx';
import HeaderTable from '../../components/layout/headerTable.jsx';
import Search from '../../components/input/search.jsx';
import { FaTrash, FaEye, FaPlus, FaBars, FaTimes } from 'react-icons/fa';
import PaginationDashboard from '../../components/button/paginationDashboard.jsx';
import ProfileCard from '../../components/card/profileCard.jsx';
import AddUser from '../../components/card/addUser.jsx';
import React, { useState } from 'react';

export default function UsersAdmin() {
  const [showProfile, setShowProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedUser = {
    name: 'Miqdad Fauzan',
    email: 'miqdad@gmail.com',
    gender: 'male',
    birthDate: '2000-06-15',
    phone: '085749353016',
    address: 'Tasikmalaya, Jawa Barat',
  };

  const [showAddUser, setShowAddUser] = useState(false);

  const [users, setUsers] = useState([
    { id: 1, name: "miqdad", email: "miqdad@gmail.com", role: "jurnalis" },
    { id: 2, name: "fauzan", email: "fauzan@gmail.com", role: "pembaca" },
    { id: 3, name: "ahmad", email: "ahmad@gmail.com", role: "editor" },
    { id: 4, name: "nurul", email: "nurul@gmail.com", role: "jurnalis" },
    { id: 5, name: "dina", email: "dina@gmail.com", role: "pembaca" },
    { id: 6, name: "reza", email: "reza@gmail.com", role: "jurnalis" },
    { id: 7, name: "salsa", email: "salsa@gmail.com", role: "pembaca" },
    { id: 8, name: "zaki", email: "zaki@gmail.com", role: "editor" },
    { id: 9, name: "ilham", email: "ilham@gmail.com", role: "jurnalis" },
    { id: 10, name: "lisa", email: "lisa@gmail.com", role: "pembaca" }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = users.slice(startIndex, endIndex);

  const deleteUser = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };

  const handleAddUser = (newUser) => {
    const nextId = users.length + 1;
    const updatedUser = { ...newUser, id: nextId };
    setUsers([...users, updatedUser]);
    setShowAddUser(false);
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

      <div className={`admin ${showAddUser ? 'blur' : ''}`}>
        <div className="label">
          <h2>Pengguna</h2>
          <button onClick={() => setShowAddUser(true)}>
            Tambah Akun <FaPlus />
          </button>
        </div>
        <div className="search"><Search /></div>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th colSpan='6'>
                  <HeaderTable title='List Pengguna' />
                </th>
              </tr>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Role</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button onClick={() => deleteUser(item.id)} className='trashButton'><FaTrash /></button>
                    <button onClick={() => setShowProfile(true)} className='lookButton'><FaEye /></button>
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
                    totalItems={users.length}
                  />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {showAddUser && (
        <div className="modal-overlay">
          <AddUser
            onClose={() => setShowAddUser(false)}
            onSubmit={handleAddUser}
          />
        </div>
      )}
      {showProfile && (
        <ProfileCard user={selectedUser} onClose={() => setShowProfile(false)} />
      )}
    </div>
  );
}
