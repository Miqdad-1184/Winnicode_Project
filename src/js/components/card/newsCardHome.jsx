import '../../../css/card.css'

const NewsCardHome = ({ title, image, time, author }) => {
  return (
      <div className="card">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="heading">
          {title}
          <div className="author">
            {time} <span>|</span> <span className="name">{author}</span>
          </div>
        </div>
      </div>
  );
};


export default NewsCardHome;
