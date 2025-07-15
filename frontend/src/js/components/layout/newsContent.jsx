import '../../../css/layout.css';

export default function NewsContent({ category, title, author, date, image, caption, content}) {
    return (
        <div className="newsContent">
        <h1 className="newsTitle">{title}</h1>
        <div className="newsMeta">
            <b>{category}</b>
            <b>{author}</b>
            <p>{date}</p>
        </div>
        <img src={image} alt={title} className="newsImage" />
        <figcaption className="imageCaption">{caption}</figcaption>
        <div className="newsBody">
            {content}
        </div>
        </div>
    );
}