import '../../../css/dashboardAdmin.css';
import NavbarAdmin from '../../components/layout/navbarAdmin.jsx';
import ProfilePhotoUploader from '../../components/random/profilPhotoUploader.jsx';
import InputText from '../../components/input/inputText.jsx';
import ChangePasswordCard from '../../components/card/changePasswordCard.jsx';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NewsJournalist() {
  const [showPasswordCard, setShowPasswordCard] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    birthDate: '',
    phone: '',
    address: '',
  });

  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setFormData({
      name: 'Miqdad Fauzan',
      email: 'miqdad@gmail.com',
      gender: 'male',
      birthDate: '2000-06-15',
      phone: '085749353016',
      address: 'Tasikmalaya, jawabarat',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditable(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data disimpan:', formData);
    setIsEditable(false);
    console.log("Ubah Profil diklik");
  };

  return (
    <div className='AdminContainer'>
      <button className="burgerButton" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars color="black" />
      </button>
      <aside className={menuOpen ? 'show' : ''}>
        <button className="closeSidebar" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <NavbarAdmin />
      </aside>

      <main className="admin">
        <article className='profile'>
          <ProfilePhotoUploader />
          <form className="profileForm" onSubmit={handleSubmit}>
            <div className="formRow">
              <InputText
                label="Nama Lengkap"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukan nama"
                required
                type="text"
                name="name"
                disabled={!isEditable}
              />
              <InputText
                label="Email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukan email"
                required
                type="email"
                name="email"
                disabled={!isEditable}
              />
            </div>

            <div className="formRow">
              <div className="inputText">
                <label>Jenis Kelamin</label>
                {!isEditable ? (
                  <input type="text" value={formData.gender === 'male' ? 'Male' : 'Female'} disabled />
                ) : (
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">-- Select Gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                )}
              </div>

              <InputText
                label="Tanggal Lahir"
                value={formData.birthDate}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
                required
                type="date"
                name="birthDate"
                disabled={!isEditable}
              />
            </div>

            <div className="formRow">
              <InputText
                label="Nomor Telepon"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                type="text"
                name="phone"
                disabled={!isEditable}
              />
              <InputText
                label="Alamat"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                required
                type="text"
                name="address"
                disabled={!isEditable}
              />
            </div>
            <div className="buttonContainer">
              <button type="button" className='deleteButton' onClick={() => setShowPasswordCard(true)}>
                Ubah password
              </button>
              {!isEditable && (
                <button type="button" className="editBtn" onClick={handleEdit}>
                  Ubah Profil
                </button>
              )}
              {isEditable && (
                <button type="submit" className="saveBtn">
                  Simpan Profil
                </button>
              )}
            </div>
          </form>
          {showPasswordCard && (
            <ChangePasswordCard onClose={() => setShowPasswordCard(false)} />
          )}
        </article>
      </main>
    </div>
  );
}
