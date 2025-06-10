import '../../../css/button.css';
import { FaThumbsUp, FaThumbsDown, FaBookmark, FaShareAlt } from 'react-icons/fa';

export default function ButtonReaction({ onLike, onDislike, onBookmark, onShare }) {
  return (
    <div className="buttonReaction">
      <button className="likeButton" onClick={onLike}>
        <FaThumbsUp size="1.5em" />
      </button>
      <button className="dislikeButton" onClick={onDislike}>
        <FaThumbsDown size="1.5em" />
      </button>
      <button className="bookmarkButton" onClick={onBookmark}>
        <FaBookmark size="1.5em" />
      </button>
      <button className="shareButton" onClick={onShare}>
        <FaShareAlt size="1.5em" />
      </button>
    </div>
  );
}