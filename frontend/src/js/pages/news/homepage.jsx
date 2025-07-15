import Header from '../../components/layout/header';
import Navbar from '../../components/layout/navbar';
import PopulerNews from '../../components/card/populerNews';
import Image from '../../../assets/populer.jpg';
import NewsCardHome from '../../components/card/newsCardHome';
import Footer from '../../components/layout/footer';
import '../../../css/homepage.css';

function Homepage() {
  const beritaPopuler = {
    category: 'politic',
    title: "LOrem Ipsum Dolor Sit Amet",
    image: Image,
    author: "Miqdad Fauzan",
    date: "2 Juni 2025",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc sem, laoreet vitae euismod sit amet, vehicula vel dolor. Maecenas egestas est in bibendum placerat."
  };


  const newsCards = Array.from({ length: 10 }, (_, index) => ({
    category: 'politic',
    title: `Berita Terbaru ${index + 1}`,
    image: Image,
    time: "2 Juni 2025",
    author: "Miqdad Fauzan"
  }));

  return (
    <div className='homepage'>
      <Header />
      <Navbar />
      <main>
      <div className='populerNewsContainer'>
        <h1>Berita Populer</h1>
        <PopulerNews
          category={beritaPopuler.category}
          title={beritaPopuler.title}
          image={beritaPopuler.image}
          author={beritaPopuler.author}
          date={beritaPopuler.date}
          caption={beritaPopuler.caption}
        />
      </div>
      <h1>Berita Terbaru</h1>
      <div className="newsNewContainer">
        {newsCards.map((item, idx) => (
          <NewsCardHome
            key={idx}
            category={item.category}
            title={item.title}
            image={item.image}
            time={item.time}
            author={item.author}
          />
        ))}
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
