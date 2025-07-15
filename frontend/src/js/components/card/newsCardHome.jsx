import '../../../css/card.css'
import { FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCardHome = ({ category,title, image, time, author }) => {
  return (
      <div className="card">
        <div className="card-image" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <label className="category"> {category} </label>
        <div className="heading">
          {title}
          <div className="author"><p className="name">{author}</p> <span>|</span> <p>{time}</p></div>
        </div>
      </div>
  );
};


export default NewsCardHome;
