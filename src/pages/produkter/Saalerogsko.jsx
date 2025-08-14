import Produkt from '/src/components/Produkt.jsx'

function Saalerogsko() {

    const produkt = {
        title: 'Såler og sko',
        about: [
            'Vi har en rekke helsesko, tøfler og sandaler fra kjente merker som; Joya, Berkemann, Arcopedico, Green Comfort, New Feet, BasisFot og MBT.',
            'Vi har også ortopediske, håndlagde såler til ulike fotproblemer og som egner seg til alt fra jobb, fritid, sport eller fest. Vi hjelper deg med å finne riktig såle.'
        ],  
        subProducts: [
            'Helsesko', 
            'Sandaler',
            'Ortopediske såler',
            'Fotbuestøtter',
            'Hælkapper'
        ],
        underText: [
            'Stikk gjerne innom vår butikk for å se på og prøve sko.'
        ],
        images: [
            {url: '/images/produkter/saalerogsko/sko-hylle.jpg'}
        ]
    }

    return (
        <Produkt produkt={produkt} id="saalerogsko">
            
        </Produkt>
    )
}

export default Saalerogsko;