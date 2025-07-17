import Produkt from '/src/components/Produkt.jsx'

function Stottebandasjer() {

    const produkt = {
        title: 'Støttebandasjer',
        about: [
            ''
        ],  
        subProducts: [
        ],
        underText: ' ',
        images: [
            {url: '/images/produkter/stottebandasjer/'},
            {url: '/images/produkter/stottebandasjer/'},
            {url: '/images/produkter/stottebandasjer/'}
        ]
    }

    return (
        <Produkt produkt={produkt} id='stottebandasjer'>
            
        </Produkt>
    )
}

export default Stottebandasjer;