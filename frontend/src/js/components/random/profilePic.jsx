import { FaUserCircle } from "react-icons/fa";
import '../../../css/random.css'

export default function ProfilePic({ photo }) {
  return (
    <div className="profilePic">
      {photo ? (
        <img src={photo} alt="profile" />
      ) : (
        <FaUserCircle color="white" />
      )}
    </div>
  );
}
