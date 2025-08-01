import Icons from '../components/Icons.jsx';
import Slideshow from '../components/Slideshow.jsx';
import Commercials from '../components/commercials/Commercials.jsx';
import Title from '../components/Title.jsx';
import HolidayBanner from '../components/HolidayBanner.jsx';

function Home() {

    const images = [
        {url: "/images/butikk/butikk.jpg"}
    ]

    return (
        <>
            <Slideshow images={images} time={10000} height="55" 
                overlay={
                    <Title text={["Spesialforretning innen", "sykepleie- og helseartikler"]}/>
                }/>
            <HolidayBanner />
            <br/>
            <Icons />
            <div className="container">
                <Commercials />
            </div>
        </>
    )
}

export default Home;