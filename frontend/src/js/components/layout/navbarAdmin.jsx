import '../../../css/layout.css'
import ProfilePic from '../random/profilePic'
import Image from '../../../assets/profile.jpg'
import { FaHome, FaComment, FaNewspaper, FaUser, FaTags, FaSignOutAlt, FaTachometerAlt, FaCog} from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'

export default function NavbarAdmin({name, role}){
    const profile ={
        image: Image,
        name: "Miqdad",
        role: 'admin'
    }
    return (
        <div className="navbarAdmin">
            <header>
                <ProfilePic 
                photo={profile.image}
                />
                <h3>{profile.name}</h3>
                <p>{profile.role}</p>
            </header>
            <ul>
                <li><NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaTachometerAlt/>Dashboard</NavLink></li>
                <li><NavLink to="/admin/news" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaNewspaper/>Berita</NavLink></li>
                <li><NavLink to="/admin/comment" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaComment/>Komentar</NavLink></li>
                <li><NavLink to="/admin/users" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaUser/>Pengguna</NavLink></li>
                <li><NavLink to="/admin/category" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaTags/>Kategori</NavLink></li>
                <li><NavLink to="/admin/profile" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaCog/>Pengaturan Profil</NavLink></li>
            </ul>
            <div>
                <Link to='/' className='navButton'><FaHome/>Kembali ke Beranda</Link>
                <Link className='navButton'><FaSignOutAlt/>Keluar</Link>
            </div>

        </div>
    )
}