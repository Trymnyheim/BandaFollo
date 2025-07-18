import Produkt from '/src/components/Produkt.jsx'

function Kompresjonstoy() {

    const produkt = {
        title: 'Kompresjonstøy og strømper',
        about: [
            'Medisinske kompresjonsstrømper er ofte nødvendig som en behandling til hovne ben, blodpropp, åreknuter, etter åreoperasjoner, venøse lidelser og under graviditet.',
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
            {url: '/images/produkter/kompresjonstoy/strompe.webp'}
        
        ]
    }

    return (
        <Produkt produkt={produkt} id='kompresjonstoy'>
            
        </Produkt>
    )
}

export default Kompresjonstoy;