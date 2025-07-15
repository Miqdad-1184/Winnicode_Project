import '../../../css/Reader.css';
import NavbarReader from '../../components/layout/navbarReader.jsx';
import NewsCardHome from '../../components/card/newsCardHome.jsx';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function SaveNewsReader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='readerContainer'>
      <button className="burgerButton" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars color='black'/>
      </button>

      <aside className={menuOpen ? 'show' : ''}>
        <button className="closeSidebar" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <NavbarReader />
      </aside>

      <main className="reader">
        <h2>Berita Tersimpan</h2>
        <article className='cardSaveContainer'>
          <div className="cardSave">
            <NewsCardHome
              category='Olahraga'
              title='Lorem Ipsum Dolor sit amet'
              time='2 juni 2025'
              author='Miqdad'
            />
          </div>
          <div className="cardSave">
            <NewsCardHome
              category='Olahraga'
              title='Lorem Ipsum Dolor sit amet'
              time='2 juni 2025'
              author='Miqdad'
            />
          </div>
        </article>
      </main>
    </div>
  );
}
