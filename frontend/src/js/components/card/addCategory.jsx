import React, { useState } from 'react';
import '../../../css/card.css'

export default function AddCategory({ onClose, onSubmit }) {
  const [category, setCategory] = useState({
    name: '',
    slug: '',
    description: '',
    status: 'active',
  });

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(category);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Masukan Kategori baru</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nama kategori
            <input
              type="text"
              name="name"
              value={category.name}
              onChange={handleChange}
              placeholder="Masukan nama kategori"
              required
            />
          </label>

          <label>
            Slug
            <input
              type="text"
              name="slug"
              value={category.slug}
              onChange={handleChange}
              placeholder="category-slug"
              required
            />
          </label>

          <label>
            Deskripsi
            <textarea
              name="description"
              value={category.description}
              onChange={handleChange}
              placeholder="masukan deskripsi kategori"
              rows="4"
            />
          </label>

          <label>Status</label>
          <div className="status-options">
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={category.status === 'active'}
                onChange={handleChange}
              />
              Aktif
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={category.status === 'inactive'}
                onChange={handleChange}
              />
              nonaktif
            </label>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">Batal</button>
            <button type="submit" className="submit-button">Tambah Kategori</button>
          </div>
        </form>
      </div>
    </div>
  );
}
