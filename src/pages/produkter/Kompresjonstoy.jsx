import Produkt from '/src/components/Produkt.jsx'

function Kompresjonstoy() {

    const produkt = {
        title: 'Kompresjonstøy og strømper',
        about: [
            ''
        ],  
        subProducts: [
        ],
        underText: ' ',
        images: [
            {url: '/images/produkter/kompresjonstoy/'},
            {url: '/images/produkter/kompresjonstoy/'},
            {url: '/images/produkter/kompresjonstoy/'}
        ]
    }

    return (
        <Produkt produkt={produkt} id='kompresjonstoy'>
            
        </Produkt>
    )
}

export default Kompresjonstoy;