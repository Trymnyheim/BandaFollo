import Icons from '../components/Icons.jsx'
import Slideshow from '../components/Slideshow.jsx';

function Home() {

    const images = [
        {
            url: "/src/assets/raad_veiledning.jpg"
        }
    ]

    return (
        <div className="body">
            <div className="banner">
                <Slideshow images={images} />
            </div>
            <p>Home</p>
            <Icons />
        </div>
    )
}

export default Home;