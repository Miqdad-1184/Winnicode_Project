import '../../../css/button.css'
import {Link} from 'react-router-dom'

export default function ButtonText ({label, link}){
    return(
        <Link to={link} className='buttonText'>{label}</Link>
    )
}