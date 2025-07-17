import Produkt from '/src/components/Produkt.jsx'

function Brokkbelter() {

    const produkt = {
        title: "Tittel",
        about: [],
        subProducts: [],
        images: []
    }

    return (
        <Produkt produkt={produkt} />
    )
}

export default Brokkbelter;