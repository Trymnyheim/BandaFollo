import Produkt from '/src/components/Produkt.jsx'

function Saarbehandling() {

    const produkt = {
        title: 'Sårbehandling',
        about: [
            ''
        ],  
        subProducts: [
        ],
        underText: ' ',
        images: [
            {url: '/images/produkter/saarbehandling/'},
            {url: '/images/produkter/saarbehandling/'},
            {url: '/images/produkter/saarbehandling/'}
        ]
    }

    return (
        <Produkt produkt={produkt} id='saarbehandling'>
            
        </Produkt>
    )
}

export default Saarbehandling;