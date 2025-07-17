import Produkt from '/src/components/Produkt.jsx'
import ImageCard from '/src/components/ImageCard.jsx'
import { useNavigate } from 'react-router-dom';


function Stomi() {

    const navigate = useNavigate();

    const produkt = {
        title: 'Stomi',
        about: [
            'Vi leverer en rekke ulike typer stomiutstyr. Vår stomisykepleier kan hjelpe med valg av utstyr for å gi deg mest mulig komfort.',
            'Vi kan blant annet tilby:'
        ],
        subProducts: ['Stomiposer', 'Lukthemmende midler', 'Badetøy'],
        images: [
            {url: '/images/produkter/stomi/salt_uro.png'}
        ]
    }

    return (
        <>
            <Produkt produkt={produkt} id='stomi' >
                <ImageCard
                    image="/images/produkter/stomi/stomi.webp"
                    title="Bestill på nett"
                    text= {[
                        'Les mer om vårt utvalg av stomiutstyr på Banda\'s nettbutikk.',
                        'Husk å velge Banda Follo som leverandør, hvis du ønsker varene dine levert av oss.'
                    ]}
                    button={{
                        text: "Til Banda's nettbutikk",
                        action: () => {
                            window.open("https://www.banda.no/produkter/stomi", "_blank");
                        }
                    }}
                />
                <ImageCard
                    image="/images/TEMP-hjemmebesøk.png"
                    title="Vi tilpasser utstyret"
                    text="Vi tilbyr våre kunder tilpassing av stomiutstyr, enten ved hjemmebesøk eller i vårt diskré tilpassingsrom i våre lokaler."
                    button={{
                        text: "Ta kontakt for avtale",
                        action: () => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            navigate('/kontakt');
                        }
                    }}
                />
            </Produkt>
        </>
    )
}

export default Stomi;