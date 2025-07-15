import { FaUserCircle } from "react-icons/fa";
import '../../../css/button.css'

export default function ButtonProfile({ photo }) {
  return (
    <button className="buttonProfile">{photo ? photo : <FaUserCircle size="2em" color="white"/>}</button>
  );
}