import Produkt from '/src/components/Produkt.jsx'

function Kompresjonstoy() {

    const produkt = {
        title: 'Kompresjonstøy og strømper',
        about: [
            'Medisinske kompresjonsstrømper er ofte nødvendig som en behandling for hovne ben, blodpropp, leggsår, åreknuter, venøse lidelser, under graviditet etter åreoperasjoner.',
            'I vår butikk får du hjelp til å ta riktige mål og se og kjenne på de ulike strømpene vi har.'
        ],  
        subProducts: [
        ],
        underText: [
            'Vårt helsepersonell vil alltid forsikre seg om at du kan bruke kompresjonsstrømper, fordi det er enkelte sykdomstilstander hvor en skal være forsiktig eller helt unngå bruk av slike medisinske strømper.',
            'Vi ser helst at du har vært til legekonsultasjon for en diagnose på dine ben før du kommer til oss.'
        ],
        images: [
            {url: '/images/produkter/kompresjonstoy/active_black.webp'},
            {url: '/images/produkter/kompresjonstoy/calf_sleeve.webp'},
            {url: '/images/produkter/kompresjonstoy/caramel_kne.webp'},
            {url: '/images/produkter/kompresjonstoy/plus_caramel.webp'},
            {url: '/images/produkter/kompresjonstoy/strompe.webp'},
            {url: '/images/produkter/kompresjonstoy/bein_butler.jpeg'},
            {url: '/images/produkter/kompresjonstoy/medi_hanske.jpg'},
            {url: '/images/produkter/kompresjonstoy/medi_juxtalite.webp'},
            {url: '/images/produkter/kompresjonstoy/medi_travel.jpg'},
            {url: '/images/produkter/kompresjonstoy/medi_butler.jpeg'},
            {url: '/images/produkter/kompresjonstoy/sport_jul.png'},
            {url: '/images/produkter/kompresjonstoy/strømpepåtrekker_glider.jpg'},
            {url: '/images/produkter/kompresjonstoy/voe_lite.jpg'}
        ]
    }

    return (
        <Produkt produkt={produkt} id='kompresjonstoy'>
            
        </Produkt>
    )
}

export default Kompresjonstoy;