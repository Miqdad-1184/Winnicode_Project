import React, { useState } from 'react';
import CommentItem from './commentReply.jsx';
import '../../../css/card.css';

const CommentList = () => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState([]);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      setReplies([...replies, {
        account: 'Anda',
        comment: replyText,
        date: new Date().toISOString().slice(0, 10),
        like: 0,
        photo: null
      }]);
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <div className="commentList">
      <span className="title">Komen</span>
      <CommentItem
        account="Miqdad Fauzan"
        photo={null}
        date="2022-04-11"
        like={5}
        comment="Berita ini benar-benar berguna sekali"
      />
      <div className="reply-section">
        <button className="reply-btn" onClick={() => setIsReplying(!isReplying)}>
          {isReplying ? 'Batal' : 'Balas'}
        </button>
        {isReplying && (
          <form className="reply-form" onSubmit={handleReplySubmit}>
            <textarea
              rows="2"
              placeholder="Tulis balasan..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button type="submit">Kirim</button>
          </form>
        )}
        {replies.map((reply, idx) => (
          <CommentItem
            key={idx}
            {...reply}
            isReply={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
