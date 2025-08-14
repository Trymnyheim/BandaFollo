import InfoAndImage from "../components/InfoAndImage.jsx";

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
        <div className="info-and-image-container">
            <InfoAndImage title="Hjemmebesøk" >
                {hjemmeText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </InfoAndImage>
            <img src="/images/raad_veiledning.jpg" style={{width: '100%'}} />
            <InfoAndImage title="Levering" >
                {leveringText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </InfoAndImage>
            <img src="/images/raad_veiledning.jpg" style={{width: '100%'}} />
            <InfoAndImage title="Råd og veiledning" >
                {veiledningText.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </InfoAndImage>
            <img src="/images/TEMP-hjemmebesøk.png" style={{width: '100%'}} />
        </div>
    )
}

export default Tjenester;