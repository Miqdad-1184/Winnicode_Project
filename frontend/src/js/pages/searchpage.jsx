import { useState } from 'react';
import '../../css/searchPage.css';
import Header from '../components/layout/header';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import NewsCardSearch from '../components/card/newsCardSearch.';
import Image from '../../assets/populer.jpg';
import SortBy from '../components/input/sortBy';
import SortTime from '../components/input/sortTime';
import ButtonFlex from '../components/button/buttonFlex';

export default function SearchPage() {
  const [sortTime, setSortTime] = useState('Hari Ini');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleApplyTimeFilter = () => {
    if (startDate && endDate) {
      setSortTime('Rentang Waktu');
    }
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
      <div className="searchPageContainer">
        <aside>
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
      <Footer />
    </div>
  );
}
