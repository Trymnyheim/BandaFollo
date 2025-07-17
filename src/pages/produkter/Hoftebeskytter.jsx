import Produkt from '/src/components/Produkt.jsx'

function Hoftebeskytter() {

    const produkt = {
        title: "Hoftebeskytter",
        about: [
            ''
        ],  
        subProducts: [
        ],
        underText: ' ',
        images: [
            {url: '/images/produkter/hoftebeskytter/'},
            {url: '/images/produkter/hoftebeskytter/'},
            {url: '/images/produkter/hoftebeskytter/'}
        ]
    }

    return (
        <Produkt produkt={produkt} id="hoftebeskytter" >

        </Produkt>
    )
}

export default Hoftebeskytter;