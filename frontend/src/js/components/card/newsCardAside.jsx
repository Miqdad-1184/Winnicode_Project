import '../../../css/card.css'

export default function NewsCardAside({ title, image, author, date }) {
    return (
        <div className="newsCardAside">
            <div className="newsAsideImage"style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
            <div className="heading">
                {title}
                <div className="author">
                    <span className="name">{author}</span>{date}
                </div>
            </div>
        </div>
    );
}