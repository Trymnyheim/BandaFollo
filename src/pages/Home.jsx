import Icons from '../components/Icons.jsx';
import Slideshow from '../components/Slideshow.jsx';
import Commercials from '../components/commercials/Commercials.jsx';
import Title from '../components/Title.jsx';
import HolidayBanner from '../components/HolidayBanner.jsx';
import ImageCard from '../components/ImageCard.jsx';
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

    const images = [
        {url: '/images/butikk/butikk.jpg'}
    ]

    const cards = [
        {
            title: 'Bredt utvalg hos BandaFollo',
            text: [
                'Banda Follo er en lokal bandagist i Ski som tilbyr medisinsk utstyr og personlig veiledning fra helsepersonell med høy faglig kompetanse. Vi setter trygghet, tilgjengelighet og diskresjon i fokus.',
                'Vi tilbyr et bredt utvalg av sykepleieartikler innen blant annet inkontinens, stomi, ernæring, sår, brystproteser, ortoser, kompresjonsstrømper/tøy, helsesko, "Enklere Liv"-produkter, krykker, tempur og velværeprodukter.'
            ],
            buttons: [
                {
                    text: 'Våre produkter',
                    action: () => {navigate('/produkter'); setTimeout(() => window.scrollTo(0, 0), 50);}
                },
                {
                    text: 'Hvordan bestille varer',
                    action: () => {navigate('/kontakt'); setTimeout(() => window.scrollTo(0, 0), 50);}
                }
            ],
            image: '/images/butikk/butikk.jpg'
        },
        {
            title: 'Vi hjelper deg',
            text: [
                'Banda Follo hjelper deg med tilpassing av utstyr, samt råd og veiledning. Vårt helsefaglige personell har lang erfaring og gir deg personlig oppfølging for at du skal føle deg trygg på valgene du tar. Vi er her for å gjøre hverdagen din enklere.',
                'Om det er noe vi kan hjelpe deg med, ta gjerne kontakt eller stikk innom vår butikk.'
            ],
            buttons: [
                {
                    text: 'Kontakt oss',
                    action: () => {navigate('/kontakt'); setTimeout(() => window.scrollTo(0, 0), 50);}
                }
            ],
            image: '/images/butikk/butikk.jpg'
        }
    ]

    return (
        <>
            <Slideshow images={images} time={10000} height="55" 
                overlay={
                    <Title text={["Spesialforretning innen", "sykepleie- og helseartikler"]}/>
                }
            />
            {false && <HolidayBanner />}
            <div className="container my-3">
                <Commercials />
            </div>
            <Icons />
            <div className="container flex-padding justify-center my-5 gap">
                {cards.map((card, index) => (
                    <ImageCard key={index} title={card.title} text={card.text} imageBottom={card.image} buttons={card.buttons} />
                ))}
            </div>
        </>
    )
}

export default Home;