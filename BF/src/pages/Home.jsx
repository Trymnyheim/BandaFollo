import Icons from '../components/Icons.jsx'
import Slideshow from '../components/Slideshow.jsx';

function Home() {

    const images = [
        {url: "/src/assets/raad_veiledning.jpg"},
        {url: "/src/assets/test.jpg"}
    ]

    return (
        <div className="body">
            <div className="banner">
                <Slideshow images={images} time={10000} />
            </div>
            <p>Home</p>
            <Icons />
        </div>
    )
}

export default Home;