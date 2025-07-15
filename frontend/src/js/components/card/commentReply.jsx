import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const CommentItem = ({ account, photo, date, comment, like, isReply = false }) => {
  return (
    <div className={`comments ${isReply ? 'reply' : ''}`}>
      <div className="comment-react">
        <button>
          <svg fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
            <path fill="#707277" strokeLinecap="round" strokeWidth={2} stroke="#707277" d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" />
          </svg>
        </button>
        <hr />
        <span>{like}</span>
      </div>
      <div className="comment-container">
        <div className="user">
          <div className="user-pic">
            {photo ? (
              <img src={photo} alt="profile" />
            ) : (
              <FaUserCircle size="2em" color="grey" />
            )}
          </div>
          <div className="user-info">
            <span>{account}</span>
            <p>{date}</p>
          </div>
        </div>
        <p className="comment-content">{comment}</p>
      </div>
    </div>
  );
};

export default CommentItem;
