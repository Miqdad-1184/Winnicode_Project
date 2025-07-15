import '../../../css/journalist.css';
import NavbarJournalist from '../../components/layout/navbarJournalist.jsx';
import InputText from '../../components/input/inputText.jsx';
import DropdownKategori from '../../components/input/dropdownCategory.jsx';
import UploadImage from '../../components/input/uploadImage.jsx';
import TextArea from '../../components/input/textArea.jsx';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function CreateNewsJournalist() {
  const [selectedKategori, setSelectedKategori] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const kategoriList = [
    { id: 1, kategori: "Politik" },
    { id: 2, kategori: "Ekonomi" },
    { id: 3, kategori: "Teknologi" },
    { id: 4, kategori: "Pendidikan" },
    { id: 5, kategori: "Olahraga" },
    { id: 6, kategori: "Kesehatan" },
    { id: 7, kategori: "Hiburan" },
    { id: 8, kategori: "Lingkungan" }
  ];

  return (
    <div className='journalistContainer'>
      <button className="burgerButton" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars color='black' />
      </button>

      <aside className={menuOpen ? 'show' : ''}>
        <button className="closeSidebar" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <NavbarJournalist />
      </aside>

      <main className="journalist">
        <h2>Tulis Berita</h2>
        <form className='createNews'>
          <div className='inputNews'>
            <InputText
              label='Judul Berita'
              placeholder='Masukan judul berita'
            />
          </div>
          <div className="inputNews">
            <DropdownKategori
              kategoriList={kategoriList}
              selectedKategori={selectedKategori}
              onChange={setSelectedKategori}
            />
          </div>
          <div className="inputNews"><UploadImage /></div>
          <div className='inputNews'>
            <InputText
              label='Caption Gambar'
              placeholder='Masukan Caption Gambar'
            />
          </div>
          <div className='inputNews'>
            <TextArea />
          </div>
          <div className="buttonContainer">
            <button type="button">Draft</button>
            <button type="submit">Terbitkan</button>
          </div>
        </form>
      </main>
    </div>
  );
}
