import Produkt from '/src/components/Produkt.jsx'

function Hjelpemidler() {

    const produkt = {
        title: "Hjelpemidler",
        about: [
            'Banda Follo fører mange ulike småhjelpemidler som kan gi en enklere hverdag. Det vi eventuelt ikke har inne i butikken kan vi formidle på bestilling. Spør oss og vi vil forsøke å hjelpe så langt det er mulig.',
            '"Enklere Liv"-produkter, Krykker, stokker, blodtrykksmåler, urinflasker, bekken, glidelaken, inkontinenslaken, Mite block mot middallergi, smekker, støtteputer, gripetang mm.',
            'Vi har også rullatorer og løfte- og hvilestoler.'
        ],  
        subProducts: [
        ],
        underText: [],
        images: [
            {url: '/images/produkter/hjelpemidler/brush.jpg'},
            {url: '/images/produkter/hjelpemidler/rullator.webp'},
            {url: '/images/produkter/hjelpemidler/badkamer.jpg'},
            {url: '/images/produkter/hjelpemidler/sittepute.jfif'},
            {url: '/images/produkter/hjelpemidler/stol.jpg'},
            {url: '/images/produkter/hjelpemidler/stool.jpg'},
            {url: '/images/produkter/hjelpemidler/toilet.jpg'},
            {url: '/images/produkter/hjelpemidler/tempur_reise.jpg'},
            {url: '/images/produkter/hjelpemidler/gips_beskytter.jpg'},
            {url: '/images/produkter/hjelpemidler/dress_tool.jpg'},
            {url: '/images/produkter/hjelpemidler/dining.jpg'},
            {url: '/images/produkter/hjelpemidler/ben.jpg'},
            {url: '/images/produkter/hjelpemidler/rullator2.png'},
            {url: '/images/produkter/hjelpemidler/griper.jpg'},
            {url: '/images/produkter/hjelpemidler/hjelpemiddel.webp'},
        ]
    }

    return (
        <Produkt produkt={produkt} id="hjelpemidler" >

        </Produkt>
    )
}

export default Hjelpemidler;