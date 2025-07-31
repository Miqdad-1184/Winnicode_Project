import { useState } from 'react';
import '../../../css/searchPage.css';
import Header from '../../components/layout/header';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import NewsCardSearch from '../../components/card/newsCardSearch.';
import Image from '../../../assets/populer.jpg';
import SortBy from '../../components/input/SortBy';
import SortTime from '../../components/input/sortTime';
import ButtonFlex from '../../components/button/buttonFlex';

export default function SearchPage() {
  const [sortTime, setSortTime] = useState('Hari Ini');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const handleApplyTimeFilter = () => {
    if (startDate && endDate) {
      setSortTime('Rentang Waktu');
    }
    setShowFilter(false);
  };

  const newsCardSearch = {
    title: "Berita Terkini",
    image: Image,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2 Juni 2025",
    author: "Miqdad Fauzan"
  };

  return (
    <div className='searchPage'>
      <Header />
      <Navbar />

      {/* 🔘 Toggle button for mobile */}
      <button className="filter-toggle" onClick={() => setShowFilter(true)}>
        Filter 🔍
      </button>

      <div className="searchPageContainer">
        {/* ⛔ Desktop sidebar only */}
        <aside className="filter-sidebar">
          <h1>Filter</h1>
          <SortBy />
          <SortTime
            sortTime={sortTime}
            setSortTime={setSortTime}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <ButtonFlex
            children="Terapkan"
            onClick={handleApplyTimeFilter}
          />
        </aside>
        <div className="newsSearchContainer">
          <NewsCardSearch {...newsCardSearch} />
          <NewsCardSearch {...newsCardSearch} />
          <NewsCardSearch {...newsCardSearch} />
        </div>
      </div>
      {showFilter && (
        <div className="filter-overlay">
          <div className="filter-overlay-content">
            <button className="close-overlay" onClick={() => setShowFilter(false)}>✖</button>
            <h1>Filter</h1>
            <SortBy />
            <SortTime
              sortTime={sortTime}
              setSortTime={setSortTime}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
            <ButtonFlex
              children="Terapkan"
              onClick={handleApplyTimeFilter}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
