import '../../../css/layout.css'
import headerLogo from '../../../assets/logo.png'
import Search from '../input/search'
import ProfilePic from '../random/profilePic'

export default function Header({author}){
  return(
    <div className='header'>      
      <img src={headerLogo} className="headerLogo" alt="winnicode logo" />
      <Search/>
      <button><ProfilePic author={author} /></button>
    </div>
  )
}
