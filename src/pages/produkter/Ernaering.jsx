import Produkt from '/src/components/Produkt.jsx'

function Ernaering() {

    const produkt = {
        title: 'Ernæring',
        about: [
            'Banda Follo fører et stort utvalg av sondeernæring og ernæringsdrikker. Mange kan få dekket ernæringsprodukter på blåresept. Spør legen din om du hører under en slik pasientgruppe eller https://www.helfo.no/lege/blaareseptordningen/individuell-stonad-til-naeringsmidler::"les Helfo sine retningslinjer".',
            'Behovet for ernæringsdrikker kan oppstå i alle aldre, men er mest vanlig blant eldre. Alvorlig sykdom kan også føre til behov for ekstra ernæring. En fullverdig ernæringsdrikk med fiber tilsvarer 2 brødskiver med smør, pålegg og en vitamintablett.',
            'Vi hjelper deg gjerne i valget av ernæringsprodukter både når det gjelder behovet for innhold og smaksvarianter.'
        ],  
        subProducts: [],
        underText: 'Bestill gjerne time for tilpassing, da vi gjerne vil ha ekstra tid og fokus på deg. Vi har et eget rom hvor diskresjon er i varetatt.',
        images: [
            {url: '/images/produkter/ernaering/nutridrink_kompakt.webp'},
            {url: '/images/produkter/ernaering/resource_apple.webp'},
            {url: '/images/produkter/ernaering/rs_protein.webp'}
        ]
    }

    return (
        <Produkt produkt={produkt} id='ernaering' />
    )
}

export default Ernaering;