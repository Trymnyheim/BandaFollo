function Tjenester() {

    const hjemmeText = [
        "Du er hjertelig velkommen til å besøke oss i vår butikk, men i spesielle tilfeller foretar vi også hjemmebesøk etter avtale. Noen ganger kan det være ønskelig å ta slike besøk sammen med hjemmesykepleien eller andre som er med i et behandlingsopplegg.",
        "Hjemmebesøk må alltid avtales i god tid, og vi vil gjerne understreke at vi på ingen måte skal erstatte offentlig helsevesen som din behandlende lege, hjemmesykepleier, stomisykepleier eller uroterapeut."
    ]

    const leveringText = [
        "Varer kan hentes i vår butikk. Vi tilbyr også gratis hjemmelevering av reseptbelagt varer etter avtale.",
        "Husk alltid å være ute i god tid med varebestilling, spesielt rundt høytider, så du ikke går tom for nødvendige hjelpemidler."
    ]

    const veiledningText = [
        "Gode hjelpemidler er ofte veldig viktig i hverdagen og kan bidra til å sikre optimal livskvalitet. Det finnes mange produkter å velge i, og hva som vil være riktig for deg kan være vanskelig å finne ut av på egen hånd.",
        "Vårt helsepersonell, med lang erfaring innen bandagistbransjen, kan gi deg råd og veiledning slik at du kan få et produkt som passer til deg. Du er velkommen til vår butikk for en prat over en kopp kaffe/te. Det kommer stadig nyheter og kanskje er det noe som dekker akkurat ditt behov.",
        "Ønsker du en personlig og diskret samtale, så har vi et eget samtalerom som egner seg for det. Ring gjerne på forhånd slik at vi sikrer oss at vi har god tid til deg."
    ]

    return (
        <>
            <div id="hjemmebesok">
                <h1>Hjemmebesøk</h1>
                {hjemmeText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <img src="/images/hjemmebesok.jpg" style={{maxWidth: '100%'}} />
            </div>
            <div id="levering">
                <h1>Levering</h1>
                {leveringText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <img src="/images/hjemkjoring.jpg" style={{maxWidth: '100%'}} />
            </div>
            <div id="veiledning">
                <h1>Råd og veiledning</h1>
                {veiledningText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </>
    )
}

export default Tjenester;