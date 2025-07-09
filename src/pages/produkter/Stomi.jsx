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
            {url: '/src/assets/produkter/stomi/salt_uro.png'}
        ]
    }

    return (
        <div id="stomi">
            <Produkt produkt={produkt} />
            <div className="container padding" style={{justifyContent: 'center', gap: '48px'}}>
                <ImageCard
                    image="/src/assets/"
                    title="Vi har kompetanse"
                    text="Vår stab har rikelig med kompetanse innen stomi. Vi kan hjelpe deg å velge produkter som funker best for deg."
                    button={{
                        text: "Les mer om vår kompetanse",
                        action: () => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            navigate('/omoss');
                        }
                    }}
                />
                <ImageCard
                    image="/src/assets/TEMP-hjemmebesøk.png"
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
            </div>

        </div>
    )
}

export default Stomi;