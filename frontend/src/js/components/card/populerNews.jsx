import '../../../css/card.css'


export default function PopulerNewsCard({ title, image, author, date, caption }) {
  return (
    <div className="populerNewsCard">
      <div className="imageWrapper">
        <img src={image} alt={title} className="newsImage" />
        <div className="overlay">
          <h3 className="newsTitle">{title}</h3>
          <div className="meta">
            <span>{date}</span>
            <span> | </span>
            <span>{author}</span>
          </div>
        </div>
      </div>
      <aside>
        <p className="newsCaption">{caption}</p>
      </aside>
    </div>
  );
}