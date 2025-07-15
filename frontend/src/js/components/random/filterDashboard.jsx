import React from 'react';
import Search from '../input/search';
import '../../../css/random.css'

export default function FilterDashboard({ status, setStatus, sortBy, setSortBy, onFilter }) {
  return (
    <div className="filter-dashboard">
      <Search placeholder="Search comments..." />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All Status</option>
        <option value="approved">Approved</option>
        <option value="pending">Pending</option>
        <option value="rejected">Rejected</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="newest">Sort By: Newest</option>
        <option value="oldest">Sort By: Oldest</option>
        <option value="az">Sort By: A-Z</option>
        <option value="za">Sort By: Z-A</option>
      </select>

      <button onClick={onFilter} className="filter-button">
        🔍 Filter
      </button>
    </div>
  );
}
