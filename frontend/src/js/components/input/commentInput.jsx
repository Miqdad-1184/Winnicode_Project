import '../../../css/input.css'
import { useState } from "react";
import {FaPaperPlane} from "react-icons/fa";


export default function CommentBox() {
  const [comment, setComment] = useState("");
  const maxLength = 1000;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      await axios.post("http://localhost:3001/api/comments", {
        text: comment,
      });
      alert("Komentar berhasil dikirim!");
      setComment("");
    } catch (error) {
      console.error("Gagal mengirim komentar", error);
    }
  };

  return (
    <div className="commentContainer">
      <form onSubmit={handleSubmit}>
        <label>Komentar</label>
        <textarea
          placeholder="Tulis komentar"
          value={comment}
          maxLength={maxLength}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="commentFooter">
          <span>{maxLength - comment.length} Karakter tersisa</span>
          <button type="submit">
            Kirim <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  );
}
