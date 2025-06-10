import '../../../css/card.css'

export default function NewsCardSearch({ title, image, author, date, caption }) {
    return (
        <div className="newsCardSearch">
            <div className="newsSearchImage"style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
            <div className="heading">
                {title}
                <p>{caption}</p>
                <div className="author">
                    <span className="name">{author}</span>{date}
                </div>
            </div>
        </div>
    );
}