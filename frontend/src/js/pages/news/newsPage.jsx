import '../../../css/newsPage.css';
import Header from '../../components/layout/header';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import NewsContent from '../../components/layout/newsContent';
import Image from '../../../assets/populer.jpg';
import ButtonReaction from '../../components/button/buttonReaction';
import NewsCardAside from '../../components/card/newsCardAside';
import CommentInput from '../../components/input/commentInput';
import CommentList from '../../components/card/commentList';



export default function NewsPage() {   

    const newsContent = {
        category: "Politik",
        title: "Lorem Ipsum Dolor Sit Amet",
        author: "Miqdad Fauzan",
        date: "2 Juni 2025",
        image: Image,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc sem, laoreet vitae euismod sit amet, vehicula vel dolor. Maecenas egestas est in bibendum placerat.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nunc sem, laoreet vitae euismod sit amet, vehicula vel dolor. Maecenas egestas est in bibendum placerat. Nullam sed ultrices quam. Fusce eu turpis a quam interdum semper nec ut nisl. Vivamus a dolor eu elit feugiat dictum ultricies vitae tortor. In elit ligula, pellentesque consequat feugiat ac, sagittis vitae risus. Integer eleifend id arcu in pharetra. Ut dolor mauris, dapibus quis massa vel, rutrum dictum ligula. Fusce sed libero sed eros pulvinar placerat. raesent semper, erat at bibendum mattis, est lacus mattis turpis, sit amet commodo felis sem et nulla. Donec eget lectus eu justo lobortis laoreet. Mauris nisi quam, feugiat tincidunt lorem sit amet, lobortis auctor nulla. Suspendisse molestie justo sed metus tempor, et auctor ipsum dictum. Proin lorem augue, dignissim a ligula id, condimentum sollicitudin dolor. Cras at mauris et tellus rhoncus aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ullamcorper eleifend metus et iaculis. Nulla facilisi. Etiam in ipsum eu magna porta mattis eu ac turpis. Donec consectetur elementum metus, quis scelerisque tortor facilisis in. Etiam quis ante in enim rhoncus placerat. Fusce ut urna quis augue vulputate cursus eget et felis. Curabitur gravida elementum risus non interdum. Aliquam sed lectus tempor nisl aliquet dapibus. Donec suscipit elit eget diam cursus lacinia. Suspendisse volutpat aliquam sodales. Cras vitae felis sodales, iaculis sem eu, rutrum ex. Quisque mollis faucibus erat, sed placerat erat ultrices nec. Curabitur eget varius libero. Nulla leo metus, accumsan vestibulum ipsum vel, consequat congue nulla. Sed quis consequat dolor. Vivamus dolor felis, venenatis quis ullamcorper nec, sodales ut nunc. Cras vitae risus purus. Maecenas vel felis sodales, fringilla enim sit amet, feugiat nunc. Maecenas sagittis nisi sed nibh imperdiet, vitae vehicula erat aliquet. Fusce sed nisl dui. In ut sem at enim tristique faucibus. Donec nec libero mollis, fringilla dui nec, fringilla leo. Suspendisse vel risus et diam posuere tempus porttitor a felis. Curabitur quis suscipit lacus. Ut metus diam, dictum ac velit malesuada, rhoncus commodo metus. Sed in ligula sed enim tincidunt eleifend. Donec id nunc a erat facilisis sodales. Suspendisse potenti. In hac habitasse platea dictumst. Morbi euismod, felis nec facilisis commodo, augue quam aliquet enim, vel convallis leo est at dolor. Maecenas ac ligula non nisi efficitur tincidunt. Nullam sed ultrices quam. Fusce eu turpis a quam interdum semper nec ut nisl. Vivamus a dolor eu elit feugiat dictum ultricies vitae tortor. In elit ligula, pellentesque consequat feugiat ac, sagittis vitae risus. Integer eleifend id arcu in pharetra. Ut dolor mauris, dapibus quis massa vel, rutrum dictum ligula. Fusce sed libero sed eros pulvinar placerat."
    }

    const newsCardAside ={
        category: 'sport',
        title: "Berita Terkait",
        image: Image,
        author: "Miqdad Fauzan",
        date: "2 Juni 2025"
    }

    return (
        <div className='newsPage'>
            <Header />
            <Navbar />
            <div className="newsPageContainer">
                <div className="newsContentContainer">
                    <NewsContent
                        category={newsContent.category}
                        title={newsContent.title}
                        author={newsContent.author}
                        date={newsContent.date}
                        image={newsContent.image}
                        caption={newsContent.caption}
                        content={newsContent.content}
                    />
                    <ButtonReaction />
                    <div className="newsCommentContainer">
                        <CommentInput/>
                        <CommentList />
                    </div>
                </div>
                <aside>
                    <h1>Berita Terkait</h1>
                    <div className="asideScroll">
                    <NewsCardAside
                        category={newsCardAside.category}
                        title={newsCardAside.title}
                        image={newsCardAside.image}
                        author={newsCardAside.author}
                        date={newsCardAside.date}
                    />
                                        <NewsCardAside
                        category={newsCardAside.category}
                        title={newsCardAside.title}
                        image={newsCardAside.image}
                        author={newsCardAside.author}
                        date={newsCardAside.date}
                    />
                                        <NewsCardAside
                        category={newsCardAside.category}
                        title={newsCardAside.title}
                        image={newsCardAside.image}
                        author={newsCardAside.author}
                        date={newsCardAside.date}
                    />
                    </div>
                </aside>
            </div>
            <Footer />
        </div>
    );
}

