import Produkt from '/src/components/Produkt.jsx'

function Brokkbelter() {

    const produkt = {
        title: "Brokkbelter",
        about: [
            'Et brokkbelte vil ofte være til hjelp ved at det holder brokket inne og dermed minsker ubehag og gjør det mindre synlig. Det finnes mange ulike brokkbelter, og vi tilpasser belter både til lyske (vi har også lyskebrokktruser) og mage.',
            'Vi gir deg i tillegg veiledning i hva som er viktig å passe på ved bruk av brokkbelter. Stomiopererte som får brokk får dekket inntil fire brokkbelter per år på blåresept.'
        ],  
        underText: [],
        images: [
            {url: '/images/produkter/brokkbelter/stomibas2.jpg'},
            {url: '/images/produkter/brokkbelter/balder_enkel.jpg'},
            {url: '/images/produkter/brokkbelter/beige_easy.jpg'},
            {url: '/images/produkter/brokkbelter/brokktruse.jpg'},
            {url: '/images/produkter/brokkbelter/brokktruse.jpg'},
            {url: '/images/produkter/brokkbelter/freija_brokk.webp'},
            {url: '/images/produkter/brokkbelter/stomi_bas.jpg'}
        ]
    }

    return (
        <Produkt produkt={produkt} id="brokkbelter" >

        </Produkt>
    )
}

export default Brokkbelter;