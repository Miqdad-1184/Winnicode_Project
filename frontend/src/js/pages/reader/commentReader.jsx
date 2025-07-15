import '../../../css/Reader.css';
import NavbarReader from '../../components/layout/navbarReader.jsx';
import CommentList from '../../components/card/commentList.jsx';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function CommentReader() {
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
        <h2>Komentar</h2>
        <article>
          <CommentList />
        </article>
      </main>
    </div>
  );
}
