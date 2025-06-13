import Icons from '../components/Icons.jsx';
import Slideshow from '../components/Slideshow.jsx';
import Campaign from '../components/Campaign.jsx';

function Home() {

    const images = [
        {url: "/src/assets/raad_veiledning.jpg"},
        {url: "/src/assets/test.jpg"}
    ]

    const campaign = {
        title: "20% på Mediven cotton",
        text: "Den første medisinke kompresjonsstrømpen med økologisk bomull og resirkulert polyamid - fra medi. Vi hjelper deg med tilpassing i vår butikk, stikk gjerne innom!",
        disclaimer: "Tilbudet gjelder fra 1/3 til 31/3",
        img: "/src/assets/kampanje.jpg"
    }

    return (
        <>
            <div className="banner">
                <Slideshow images={images} time={10000} />
            </div>
            <p>Din lokale bandagist</p>
            <Campaign campaign={campaign} />
            <Icons />
        </>
    )
}

export default Home;