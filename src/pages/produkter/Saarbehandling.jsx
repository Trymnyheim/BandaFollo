import Produkt from '/src/components/Produkt.jsx'

function Saarbehandling() {

    const produkt = {
        title: 'Sårbehandling',
        about: [
            'Banda Follo fører mange ulike sårbandasjer til de enkle sår til de som er mere avanserte og kroniske. Valg av behandling avhenger av type sår og alvorlighetsgrad. F.eks. så trenger venøse leggsår både gode sårbandasjer og kompresjonsbehandling med enten spesialstrømper eller elastisk bind. Dette får du kjøpt hos oss, og våre erfarne sykepleiere kan gi deg veiledning i bruk av bandasjer/ kompresjonsstrømper og stell av sår.', 
            'Generelt dekkes ikke sårprodukter på blåresept. I noen tilfeller kan slikt materiell likevel dekkes på vedtak fra Helfo. Dette kan du lese mer om på https://www.helsenorge.no/betaling-for-helsetjenester/betaling-for-bandasjemateriell-forbruksmateriell-og-reseptfrie-legemidler::"HelseNorge".'
        ],  
        subProducts: [
        ],
        underText: [],
        images: [
            {url: '/images/produkter/saarprodukter/saarprodukter.jpg'},
            {url: '/images/produkter/saarprodukter/bandasjer.jpg'}
        ]
    }

    return (
        <Produkt produkt={produkt} id='saarbehandling'>
            
        </Produkt>
    )
}

export default Saarbehandling;