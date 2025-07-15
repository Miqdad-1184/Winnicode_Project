import '../../../css/layout.css'
import ProfilePic from '../random/profilePic'
import Image from '../../../assets/profile.jpg'
import { FaHome, FaComment, FaBookmark, FaUser, FaSignOutAlt, FaBell} from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'

export default function NavbarAdmin({name, role}){
    const profile ={
        image: Image,
        name: "Miqdad",
        role: 'pembaca'
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
                <li><NavLink to="/reader/profile" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaUser/>Pengaturan Profil</NavLink></li>
                <li><NavLink to="/reader/save-news" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaBookmark/>Berita Tersimpan</NavLink></li>
                <li><NavLink to="/reader/comment" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaComment/>Komentar</NavLink></li>
                <li><NavLink to="/reader/notification" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaBell/>Notifikasi</NavLink></li>
            </ul>
            <div>
                <Link to='/' className='navButton'><FaHome/>Kembali ke Beranda</Link>
                <Link className='navButton'><FaSignOutAlt/>Keluar</Link>
            </div>

        </div>
    )
}