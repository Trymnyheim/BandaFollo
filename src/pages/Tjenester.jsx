import TextAndImage from "../components/TextAndImage";

function Tjenester() {

    const imageStyle = {
        height: '400px'
    }

    const hjemmeText = [
        "Du er hjertelig velkommen til å besøke oss i vår butikk. Vi kan også foreta hjemmebesøk etter avtale. Noen ganger kan det være ønskelig å ta slike besøk sammen med hjemmesykepleien eller andre som er med i et behandlingsopplegg.",
        "Hjemmebesøk må alltid avtales i god tid, og vi vil gjerne understreke at vi på ingen måte skal erstatte offentlig helsevesen som din behandlende lege, hjemmesykepleier, stomisykepleier og uroterapeut."
    ]

    const leveringText = [
        "Varer kan hentes i vår butikk, men vi tilbyr også gratis hjemmelevering etter avtale.",
        "Husk alltid å være ute i god tid med varebestilling så du ikke går tom for nødvendige hjelpemidler."
    ]

    const veiledningText = [
        "Gode hjelpemidler er ofte veldig viktig i hverdagen og for økt livskvalitet. Det finnes mange produkter å velge i, og hva som vil være riktig for deg kan være vanskelig å finne ut av på egen hånd.",
        "Vårt helsepersonell med lang erfaring innen bandagist bransjen kan gi deg råd og veiledning slik at du kan få et produkt som passer til deg. Du er velkommen til vår butikk for en prat over en kopp kaffe/te. Det kommer stadig nyheter og kanskje er det noe som akkurat dekker ditt behov.",
        "Ønsker du en personlig og diskret samtale så har vi et eget samtalerom som egner seg for det. Ring gjerne på forhånd slik at vi sikrer oss at vi har god tid til deg. God råd hos oss er gratis!"
    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '46px' }}>
            <TextAndImage id="hjemmebesok" title="Hjemmebesøk" text={hjemmeText} image="/images/test.jpg" />
            <TextAndImage id="levering" title="Levering" text={leveringText} image="/images/test.jpg" left={true} />
            <TextAndImage id="veiledning" title="Råd og Veiledning" text={veiledningText} image="/images/test.jpg" />
        </div>
    )
}

export default Tjenester;