import Produkt from '/src/components/Produkt.jsx'

function Inkontinens() {

    const produkt = {
        title: "Inkontinens",
        about: [
            ''
        ],  
        subProducts: [
        ],
        underText: ' ',
        images: [
            {url: '/images/produkter/inkontinens/'},
            {url: '/images/produkter/inkontinens/'},
            {url: '/images/produkter/inkontinens/'}
        ]
    }

    return (
        <Produkt produkt={produkt} id="inkontinens" >

        </Produkt>
    )
}

export default Inkontinens;