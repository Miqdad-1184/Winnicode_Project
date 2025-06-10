import '../../../css/layout.css'
import ProfilePic from '../random/profilePic'
import Image from '../../../assets/profile.jpg'
import { FaHome, FaComment, FaNewspaper, FaUser, FaTags, FaSignOutAlt} from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'

export default function NavbarAdmin({name}){
    const profile ={
        image: Image,
        name: "Miqdad"
    }
    return (
        <div className="navbarAdmin">
            <header>
                <ProfilePic 
                photo={profile.image}
                />
                <h1>{profile.name}</h1>
            </header>
            <ul>
                <li><NavLink to="/profile-admin" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaHome size="1.5em"/>Dashboard</NavLink></li>
                <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaNewspaper size="1.5em"/>Berita</NavLink></li>
                <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaComment size="1.5em"/>Komentar</NavLink></li>
                <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaUser size="1.5em"/>Pengguna</NavLink></li>
                <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaTags size="1.5em"/>Kategori</NavLink></li>
            </ul>
            <div>
                <Link className='navButton'>Kembali ke Beranda</Link>
                <Link className='navButton'><FaSignOutAlt/>Keluar</Link>
            </div>

        </div>
    )
}