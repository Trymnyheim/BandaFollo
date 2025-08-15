import Produkt from '/src/components/Produkt.jsx'

function Stomi() {

    const produkt = {
        title: 'Stomi',
        about: [
            'Vi fører poser, plater og tilbehør fra alle leverandørene og har lang erfaring i tilpassing av stomiutstyr. Er du stomioperert kan du derfor trygt bruke Banda Follo.',
            'Vår stomi- og inkontinenssykepleier kan gi råd ved problemer eller ubehag, og hjelpe deg deg å finne akkurat det utstyret som passer best for deg. Ta gjerne kontakt på forhånd om du trenger hjelp med noe, så vi kan sette av tid til å hjelpe deg. //kontakt::"Les hvordan du kan kontakte oss her".',
            'Vi fører belter og badetøy for barn, damer og herrer som er spesielt tilpasset stomiopererte. Vi tilpasser også brokkbelter for stomi.'
        ],
        subProducts: [],
        images: [
            {url: '/images/produkter/stomi/salt_uro.png'}
        ]
    }

    return (
        <>
            <Produkt produkt={produkt} id='stomi' />
        </>
    )
}

export default Stomi;