import Slideshow from '../components/Slideshow.jsx';
import { HashLink } from 'react-router-hash-link';
import useScrollWithOffset from '../utils/useScrollWithOffset.jsx';
import InfoAndImage from '../components/InfoAndImage.jsx'

function OmOss() {

    const scrollWithOffset = useScrollWithOffset();

    const images = [
        {url: "/images/butikk/BF-butikk.jpg"},
        {url: "/images/butikk/butikk-sko.jpg"},
        {url: "/images/butikk/butikk-hylle.jpg"},
        {url: "/images/butikk/sitteplass.jpg"},
        {url: "/images/butikk/klaer.jpg"},
        {url: "/images/butikk/hjelpemidler.jpg"},
        {url: "/images/butikk/bandasjer.jpg"},
        {url: "/images/butikk/lager.jpg"},
    ]

    return (
        <>
            <img src="/images/ansatte/ansatte.jpg" style={{width: '100%'}}/>
            <div className="info-and-image-container">
                <InfoAndImage title="Kompetanse" image="/images/raad_veiledning.jpg" large>
                    <p>
                        Hos oss blir du alltid møtt av ansatte som er helsefaglig utdannet med bred kompetanse innen våre produktkategorier.
                        Gode hjelpemidler er viktig for livskvaliteten og hos oss kan du få hjelp til å finne
                        de riktige produktene for deg og få veiledning i hvordan de skal brukes.
                    </p>
                    <p>
                        Vi har stomi- og kontinenssykepleier som kan gi råd og veiledning for de med stomi
                        eller problemer med kontinens (avføringskontroll). Våre uroterapauter kan hjelpe deg
                        å finne gode produkter for problemer med vannlatning/kateterisering.

                    </p>
                    <p>
                        Vi gjør vårt beste til å holde oss oppdatert på nye produkter som kan være 
                        nyttig for deg, slik at du kan stole på vår kompetanse når vi gir deg råd 
                        og veiledning.
                    </p>
                </InfoAndImage>
                <InfoAndImage title="Trygghet" image="/images/butikk/stol-avlang.jpg" large >
                    <p>
                        Vårt mål er å skape trygghet for deg som kunde og at du får den hjelpen
                        og støtten du trenger for en problemfri hverdag. Vi er derimot ikke 
                        en erstatning for helsetjenester, så vi vil alltid rådføre våre kunder 
                        til å søke helsehjelp hvis vi mener det er hensiktsmessig.
                    </p>
                    <p>
                        Vi legger stor vekt på diskresjon så hvis du ønsker det kan vårt 
                        samtale/prøverom benyttes. Alle våre medarbeidere har taushetsplikt.
                    </p>
                </InfoAndImage>
                <InfoAndImage title="Tilgjengelighet">
                    <p>
                        Banda Follo er den eneste bandagisten med butikk i vårt distrikt. Vår 
                        butikk ligger i Ski, med gratis kundeparkering rett utenfor døren og kun 
                        fem minutter å gå fra Ski Stasjon.&nbsp;
                        <HashLink scroll={scrollWithOffset} to={'/kontakt#contact'} className="link">
                            Se våre åpningstider og butikkens adresse her.
                        </HashLink>
                    </p>
                    <p>
                        Som din lokale bandagist vil vi at du skal kunne få personlig kontakt 
                        og oppfølging. Mye kan bestilles over telefon, men ofte er det best å ta 
                        og føle på produkter, samt få personlig veiledning ansikt til ansikt. Det kan 
                        du få hos oss, gjerne over en kopp kaffe/te.
                    </p>
                    <p>
                        Ved spesielle behov kan det være mulig å avtale et hjemmebesøk.&nbsp;
                        <HashLink scroll={scrollWithOffset }to={'/kontakt#contact'} className="link" >
                            Ta kontakt for å høre mer om dette tilbudet.
                        </HashLink>
                    </p>
                </InfoAndImage>
                <InfoAndImage colored center bordered>
                    <h3 className="margin-vertical">Vi er medlem i Banda.</h3>
                    <img src="/images/logo/banda.svg" className="banda-logo" />
                    <p className="margin-vertical">
                        Banda er en norsk kjede med over 40 uavhengige butikker over hele 
                        landet og sysselsetter 200 helsearbeidere. Kjeden er 
                        unikt eiet av de lokale eierne av butikkene.
                        <br/>
                        <a href="https://www.banda.no/om-banda" className="link-light" target="_blank">
                            Les mer om Bandakjeden her.
                        </a>
                    </p>
                </InfoAndImage>
            </div>
            <hr/>
            <div className="padding center" style={{maxWidth: '700px', margin: 'auto'}}>
                <h3 style={{textAlign: 'center'}}>Du er hjertelig velkommen!</h3>
                <p>Hvis du ønsker å få en forsmak på hvordan det ser ut hos oss, så har vi satt sammen en liten digital omvisning nedenfor. Stikk gjerne innom om du ønsker å se mer eller&nbsp;
                    <HashLink scroll={scrollWithOffset }to={'/kontakt#contact'} className="link" >
                        ta kontakt&nbsp;
                    </HashLink>
                    hvis det er noe du lurer på.
                </p>
            </div>
            <div style={{
                flex: '1 0 auto',
                maxHeight: '80vh',
                border: '1px solid rgba(209, 209, 209, 1)',
                aspectRatio: '3 / 2',
                margin: '0 auto'
                }}
            >
                <Slideshow images={images} withArrows={true} contain/>
            </div>
        </>
    )
}

export default OmOss;