export default function NewsCardAside({ category, title, image, author, date }) {
  return (
    <div className="newsCardAside">
      <div
        className="newsAsideImage"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="asideContent">
        <label className="category">{category}</label>
        <div className="heading">{title}</div>
        <div className="author">
          <span className="name">{author}</span> {date}
        </div>
      </div>
    </div>
  );
}
