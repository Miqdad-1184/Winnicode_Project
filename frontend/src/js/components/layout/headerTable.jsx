import React from 'react';
import { FaTrash } from 'react-icons/fa';
import '../../../css/layout.css';

export default function TableHeader({ title, onAdd, onDelete }) {
  return (
    <div className="table-header">
      <p>{title}</p>
      <div className="button-group">
        <button className="delete-btn" onClick={onDelete}>
          <FaTrash style={{ marginRight: '4px' }} />
          Delete
        </button>
      </div>
    </div>
  );
}
