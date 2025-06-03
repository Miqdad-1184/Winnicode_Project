import '../../../css/layout.css'

export default function Navbar({ author }) {
  return (
      <nav className="navbar">
        <ul>
          <li>Sejarah</li>
          <li>Berita</li>
          <li>Olahraga</li>
          <li>Politik</li>
          <li>Rekreasi</li>
        </ul>
      </nav>
  );
}