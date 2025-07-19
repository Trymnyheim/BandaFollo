import Produkt from '/src/components/Produkt.jsx'

function Hjelpemidler() {

    const produkt = {
        title: "Hjelpemidler",
        about: [
            ''
        ],  
        subProducts: [
        ],
        underText: [],
        images: [
            {url: '/images/produkter/hjelpemidler/hjelpemiddel.webp'},
        ]
    }

    return (
        <Produkt produkt={produkt} id="hjelpemidler" >

        </Produkt>
    )
}

export default Hjelpemidler;