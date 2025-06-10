import '../../../css/layout.css'
import headerLogo from '../../../assets/logo.png'
import Search from '../input/search'
import ButtonTheme from '../button/buttonTheme'
import ButtonProfile from '../button/buttonProfile'


export default function Header({author}){
  return(
    <div className='header'>      
      <img src={headerLogo} className="headerLogo" alt="winnicode logo" />
      <Search/>
      <div className='headerRight'>
        <ButtonProfile/>
        <ButtonTheme />
      </div>
    </div>
  )
}
