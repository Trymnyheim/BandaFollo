import Produkt from '/src/components/Produkt.jsx'

function Stottebandasjer() {

    const produkt = {
        title: 'Støttebandasjer',
        about: [
            'Vondt kne? Vondt håndledd? Da kan ortoser eller støttebandasjer være til god hjelp. Vi har et stort utvalg av funksjonelle, behagelige produkter av høy kvalitet.',
            'Vi har støttebandasjer for:'
    
        ],  
        subProducts: [
            'Ankel',
            'Kne',
            'Rygg',
            'Håndledd',
            'Albue',
            'Skulder',
            'Hals'
        ],
        underText: [
            'Støttebandasjer kan brukes til å stabilisere et skadet ledd ved at ugunstige bevegelser hindres, mens bevegelser som er bra for ledder vil kunne utføres. De kan også brukes for å gi smertelindring og økt bevegelighet ved at de komprimerer og reduserer hevelser.'
        ],
        images: [
            {url: '/images/produkter/stottebandasjer/genumedi-PSS.jpeg'},
            {url: '/images/produkter/stottebandasjer/armslinga.jpg'},
            {url: '/images/produkter/stottebandasjer/elcross_lux.jpg'},
            {url: '/images/produkter/stottebandasjer/genumedi_kne.jpg'},
            {url: '/images/produkter/stottebandasjer/lumbamed.jpeg'},
            {url: '/images/produkter/stottebandasjer/neck_blue.jpg'},
            {url: '/images/produkter/stottebandasjer/ryggbelte.jpg'},
            {url: '/images/produkter/stottebandasjer/wrist_lacer.png'},
            {url: '/images/produkter/stottebandasjer/active_x_patella.jpg'}
        ]
    }

    return (
        <Produkt produkt={produkt} id='stottebandasjer'>
            
        </Produkt>
    )
}

export default Stottebandasjer;