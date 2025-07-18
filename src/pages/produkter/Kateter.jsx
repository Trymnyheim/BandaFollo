import Produkt from '/src/components/Produkt.jsx'

function Kateter() {

    const produkt = {
        title: 'Kateter',
        about: [
            'Kateter er ofte nødvendig når urinblæren ikke tømmer seg godt nok. Vi har et stort utvalg av engangskateter, permantente katetere, ventiler og urinposer til både menn, kvinner og barn.'
        ],  
        subProducts: [
            'Engangskateter', 
            'Permanentkateter',
            'Kateterventiler',
            'Urinposer (med ulike festeanordninger)'
        ],
        underText: [
            'Vår uroterapeut (urologisk sykepleier) kan bistå med valg av utstyr, gode råd og opplæring i bruk av kateter.'
        ],
        images: [
            {url: '/images/produkter/kateter/'},
            {url: '/images/produkter/kateter/'},
            {url: '/images/produkter/kateter/'}
        ]
    }

    return (
        <Produkt produkt={produkt} id='kateter'>
            
        </Produkt>
    )
}

export default Kateter;