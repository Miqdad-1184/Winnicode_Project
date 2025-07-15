import React, { useState } from 'react';
import '../../../css/card.css';

export default function AddUser({ onClose, onSubmit }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: 'jurnalis',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Tambah Pengguna Baru</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nama
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Nama lengkap"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="user@email.com"
              required
            />
          </label>

          <label>
            Role
            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              required
            >
              <option value="admin">Admin</option>
              <option value="pembaca">Pembaca</option>
              <option value="jurnalis">Jurnalis</option>
            </select>
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </label>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
            <button type="submit" className="submit-button">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
}
