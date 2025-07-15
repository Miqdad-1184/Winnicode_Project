import React, { useState } from 'react';
import '../../../css/card.css';
import InputText from '../input/inputText.jsx';

export default function ChangePasswordCard({ onClose }) {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert('Konfirmasi password tidak cocok.');
      return;
    }
    console.log('Password berhasil diubah:', form);
    onClose();
  };

  return (
    <div className="passwordCardOverlay">
      <div className="passwordCard">
        <h2>Ubah Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Password Sekarang</label>
            <div className='input'>
            <InputText
              type="password"
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              required
            />
            </div>
          </div>
          <div className="formGroup">
            <label>Password Baru</label>
            <div className='input'>
            <InputText
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
            </div>
          </div>
          <div className="formGroup">
            <label>Konfirmasi Password</label>
            <div className='input'>
            <InputText
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            </div>
          </div>
          <div className="buttonGroup">
            <button type="button" className="cancelButton" onClick={onClose}>Batal</button>
            <button type="submit" className="saveButton">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
