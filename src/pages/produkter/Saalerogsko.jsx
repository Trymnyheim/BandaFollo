import Produkt from '/src/components/Produkt.jsx'

function Saalerogsko() {

    const produkt = {
        title: 'Såler og sko',
        about: [
            'Vi har en rekke helsesko, tøfler og sandaler fra kjente merker. Vi har også ortopediske, håndlagde såler til ulike fotproblemer og som egner seg til alt fra jobb, fritid, sport eller fest. Vi hjelper deg med å finne riktig såle.'
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
            {url: '/images/produkter/saalerogsko/medi_footsupport.jpeg'},
            {url: '/images/produkter/saalerogsko/berkmann_sandal.jpg'},
            {url: '/images/produkter/saalerogsko/carbon_fotplate.jpg'},
            {url: '/images/produkter/saalerogsko/footsupport_heal.jpeg'},
            {url: '/images/produkter/saalerogsko/fotpleie.jpg'},
            {url: '/images/produkter/saalerogsko/joya.jpg'},
            {url: '/images/produkter/saalerogsko/medi_comfort.jpg'},
            {url: '/images/produkter/saalerogsko/medi_heel_soft.jpg'},
            {url: '/images/produkter/saalerogsko/medi_junior.jpg'},
            {url: '/images/produkter/saalerogsko/medi_sport.jpg'},
            {url: '/images/produkter/saalerogsko/postop_sko.jpg'},
            {url: '/images/produkter/saalerogsko/sko-hylle.jpg'}
        ]
    }

    return (
        <Produkt produkt={produkt} id="saalerogsko">
            
        </Produkt>
    )
}

export default Saalerogsko;