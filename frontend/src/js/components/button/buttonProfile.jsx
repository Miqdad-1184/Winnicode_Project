import { FaUserCircle } from "react-icons/fa";

export default function ButtonProfile({ photo }) {
  return (
    <button>{photo ? photo : <FaUserCircle size="2em" color="white"/>}</button>
  );
}