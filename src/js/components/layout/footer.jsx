import '../../../css/layout.css'
import FooterLogo from '../../../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <img src={FooterLogo} className="footerLogo" alt="Winnicode Logo" />
        <nav className="list">
            <ul>
                <li><a href="">Beranda</a></li>
                <li><a href="">Privasi & Policy</a></li>
                <li><a href="">Tentang Kami</a></li>
            </ul>
        </nav>
        <nav className="contact">
            <p>Kontak</p>
            <ul>
                <li><a href=""><FaInstagram/></a></li>
                <li><a href=""><FaTwitter/></a></li>
                <li><a href=""><FaEnvelope/></a></li>
                <li><a href=""><FaFacebook/></a></li>
                <li><a href=""><FaLinkedin/></a></li>
            </ul>
        </nav>
        <nav className="address">
            <ul>
                <li>
                    <b>Alamat (Bandung)</b>
                    <p>Jl. Asia Afrika No.158, Kb. Pisang, Kec. Sumur Bandung,Kota Bandung, Jawa Barat 40261</p>
                </li>
                <li>
                    <b>Alamat (Cabang Yogyakarta)</b>
                    <p>Bantul, Yogyakarta</p>
                </li>
                <li>
                    <b>Alamat (Cabang Bekasi)</b>
                    <p>Bekasi, Jawa Barat</p>
                </li>
            </ul>
        </nav>
      </div>
      <div className="footerCaption">
        <p>&copy; 2023 Winnicode. All rights reserved.</p>
      </div>
    </footer>
  );
}