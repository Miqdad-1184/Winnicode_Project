import '../../../css/layout.css'
import ProfilePic from '../random/profilePic'
import Image from '../../../assets/profile.jpg'
import { FaHome, FaComment, FaNewspaper, FaUser, FaPlus, FaSignOutAlt, FaTachometerAlt} from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'

export default function NavbarJurnalist({name,role}){
    const profile ={
        image: Image,
        name: "Miqdad",
        role: 'jurnalis'
    }
    return (
        <div className="navbarAdmin">
            <header>
                <ProfilePic 
                photo={profile.image}
                />
                <h3>{profile.name}</h3>
                <hp>{profile.role}</hp>
            </header>
            <ul>
                <li><NavLink to="/journalist/dashboard" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaTachometerAlt/>Dashboard</NavLink></li>
                <li><NavLink to="/journalist/news" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaNewspaper/>Berita</NavLink></li>
                <li><NavLink to="/journalist/create-news" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaPlus/>Tulis Berita</NavLink></li>
                <li><NavLink to="/journalist/comment" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaComment/>Komentar</NavLink></li>
                <li><NavLink to="/journalist/profile" className={({ isActive }) => isActive ? "navButton active" : "navButton"}><FaUser/>Pengaturan Profil</NavLink></li>

            </ul>
            <div>
                <Link to='/' className='navButton'><FaHome/>Kembali ke Beranda</Link>
                <Link className='navButton'><FaSignOutAlt/>Keluar</Link>
            </div>

        </div>
    )
}