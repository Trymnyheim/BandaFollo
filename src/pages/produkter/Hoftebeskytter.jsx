import Produkt from '/src/components/Produkt.jsx'

function Hoftebeskytter() {

    const produkt = {
        title: "Hoftebeskytter",
        about: [
            'Nesten 9000 voksne, for det meste eldre, faller og brekker hoften hvert år. Hoftebeskytter forebygger brudd, og kan derfor både være livreddende og bidra til å sikre opprettholdelse av livskvalitet.',
            'Ved behov dekkes hoftebeskyttere på blåresept. Kom gjerne innom eller ring oss hvis du ønsker mer informasjon om produktet.'
        ],  
        subProducts: [
        ],
        images: [
            {url: '/images/produkter/hoftebeskytter/hoftebeskytter.jpg'}
        ]
    }

    return (
        <Produkt produkt={produkt} id="hoftebeskytter" >

        </Produkt>
    )
}

export default Hoftebeskytter;