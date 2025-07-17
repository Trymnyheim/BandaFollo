import Produkt from '/src/components/Produkt.jsx'

function Brokkbelter() {

    const produkt = {
        title: "Brokkbelter",
        about: [
            ''
        ],  
        subProducts: [
        ],
        underText: ' ',
        images: [
            {url: '/images/produkter/brokkbelter/'},
            {url: '/images/produkter/brokkbelter/'},
            {url: '/images/produkter/brokkbelter/'}
        ]
    }

    return (
        <Produkt produkt={produkt} id="brokkbelter" >

        </Produkt>
    )
}

export default Brokkbelter;