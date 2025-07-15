import { FaBell } from 'react-icons/fa';
import '../../../css/card.css';

export default function NotificationCard({ title, message, time }) {
  return (
    <div className="notification-card">
      <div className="icon">
        <FaBell />
      </div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="message">{message}</p>
        <span className="time">{time}</span>
      </div>
    </div>
  );
}
