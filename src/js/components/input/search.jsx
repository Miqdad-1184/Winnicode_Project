import { FaSearch } from "react-icons/fa"
import '../../../css/input.css';

export default function Search(){
    return(
    <div className="search">
        <input type="text" placeholder="Search..." className="searchInput" />
        <button className="searchButton"> <FaSearch/> </button>
    </div>
    )
}