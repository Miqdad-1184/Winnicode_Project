import { FaUserCircle } from "react-icons/fa";

export default function ProfilePic({ photo }) {
  return ( photo ? photo : <FaUserCircle size="2em" color="white"/> );
}