import Produkt from '/src/components/Produkt.jsx'

function Inkontinens() {

    const produkt = {
        title: "Inkontinens",
        about: [
            'Fra oss kan du få hentet eller levert alt av inkontinensprodukter på blåresept, samt en rekke andre produkter.',
            'Vår uroterapeut kan gi deg råd og veiledning i valg av utstyr slik at du får det som passer best til ditt behov.'
        ],  
        subProducts: [
            'Bleier',
            'Truser',
            'Kateter',
            'Uridomer',
            'Spesialutstyr'
        ],
        underText: [],
        images: [
            {url: '/images/produkter/inkontinens/tena_sil_washable2.jpg'},
            {url: '/images/produkter/inkontinens/black-low-waist.jpg'},
            {url: '/images/produkter/inkontinens/creme-high-waist.jpg'},
            {url: '/images/produkter/inkontinens/diveen_box.png'},
            {url: '/images/produkter/inkontinens/tena-men.png'},
            {url: '/images/produkter/inkontinens/navina.webp'},
            {url: '/images/produkter/inkontinens/tena_sil_high.png'},
            {url: '/images/produkter/inkontinens/tena_sil_low.jpg'},
            {url: '/images/produkter/inkontinens/tena_sil_washable.png'}
        ]
    }

    return (
        <Produkt produkt={produkt} id="inkontinens" />
    )
}

export default Inkontinens;