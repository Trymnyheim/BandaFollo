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
                'Vi tilbyr et bredt utvalg av sykepleieartikler innen inkontinens, stomi, ernæring, sår, brystproteser, ortoser, helsesko, blodtrykksmåler, krykker, tempur, velværeprodukter og diverse sykepleieartikler.'
            ],
            image: '/images/butikk/butikk.jpg'
        },
        {
            title: 'Vi hjelper deg',
            text: [
                'Banda Follo hjelper deg med tilpasning av utstyr, samt råd og veiledning tilpasset dine behov. Vårt helsefaglige personell har lang erfaring og gir deg personlig oppfølging for at du skal føle deg trygg på valgene du tar. Vi er her for å gjøre hverdagen din enklere.',
                'Om det er noe vi kan hjelpe deg med, ta gjerne kontakt eller stikk innom vår butikk.'
            ],
            button: {
                text: 'Kontakt oss',
                action: () => {navigate('/kontakt'); setTimeout(() => window.scrollTo(0, 0), 50);}
            },
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
            <div className="container justify-center my-5">
                {cards.map((card, index) => (
                    <ImageCard key={index} title={card.title} text={card.text} imageBottom={card.image} button={card.button} />
                ))}
            </div>
        </>
    )
}

export default Home;