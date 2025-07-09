import Icons from '../components/Icons.jsx';
import Slideshow from '../components/Slideshow.jsx';
import Campaign from '../components/Campaign.jsx';
import Title from '../components/Title.jsx';

function Home() {

    const images = [
        {url: "/assets/butikk/butikk.jpg"},
        {url: "/assets/test1.jpg"}
    ]

    const campaign = {
        title: "20% på Mediven cotton",
        text: "Den første medisinke kompresjonsstrømpen med økologisk bomull og resirkulert polyamid - fra medi. Vi hjelper deg med tilpassing i vår butikk, stikk gjerne innom!",
        disclaimer: "Tilbudet gjelder fra 1/3 til 31/3",
        img: "/src/assets/kampanje.jpg"
    }

    return (
        <div>
            <div style={{height: '55vh'}}>
                <Slideshow images={images} time={10000} overlay={<Title text={["Spesialforretning innen", "sykepleie- og helseartikler"]}/>}/>
            </div>
            <br/>
            <Icons />
            <div className="container">
                <Campaign campaign={campaign} />
                <Campaign campaign={campaign} />
            </div>
        </div>
    )
}

export default Home;