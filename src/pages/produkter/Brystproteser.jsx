import Produkt from '/src/components/Produkt.jsx'

function Brystproteser() {

    const produkt = {
        title: 'Brystproteser',
        about: [
            'Vi fører brystproteser fra flere ulike leverandører, samt BH-er og badetøy for proteser.'
        ],
        subProducts: [
            'Brystproteser',
            'BH-er',
            'Badetøy',
            'Hodeplagg'
        ],
        underText: [
            'Bestill gjerne time for tilpassing, da vi gjerne vil ha ekstra tid og fokus på deg. Vi har et eget rom hvor diskresjon er i varetatt.'
        ],
        images: [
            {url: '/images/produkter/brystproteser/brystprotese.jpg'},
            {url: '/images/produkter/brystproteser/brystprotese2.jpg'},
            {url: '/images/produkter/brystproteser/brystprotese4.jpg'}
        ]
    }

    return (
        <Produkt produkt={produkt} id='brystproteser' />
    )
}

export default Brystproteser;