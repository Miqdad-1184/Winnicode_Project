import '../../../css/Reader.css';
import NavbarReader from '../../components/layout/navbarReader.jsx';
import NotificationCard from '../../components/layout/notificationCard.jsx';
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
        <h2>Notifikasi</h2>
        <NotificationCard
          title="Berita Tersimpan"
          message="Kamu telah menyimpan berita: 'Lorem Ipsum Dolor sit amet'"
          time="2 Juni 2025"
        />
        <NotificationCard
          title="Komentar Baru"
          message="Komentar kamu mendapatkan balasan dari Miqdad Fauzan"
          time="3 Juni 2025"
        />
        <NotificationCard
          title="Berita Baru"
          message="Berita baru telah dipublikasikan di kategori favorit kamu: Teknologi"
          time="4 Juni 2025"
        />
      </main>
    </div>
  );
}
