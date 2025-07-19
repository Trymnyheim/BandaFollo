import Slideshow from '../components/Slideshow.jsx';
import { HashLink } from 'react-router-hash-link';
import useScrollWithOffset from '../utils/useScrollWithOffset.jsx';
import InfoAndImage from '../components/InfoAndImage.jsx'

function OmOss() {

    const scrollWithOffset = useScrollWithOffset();

    const images = [
        {url: "/images/butikk/BF-butikk.jpg"},
        {url: "/images/butikk/butikk-sko.jpg"},
    ]

    return (
        <>
            <img src="/images/ansatte/ansatte.jpg" style={{width: '100%'}}/>
            <div className="info-and-image-container">
                <InfoAndImage title="Kompetanse" image="/images/raad_veiledning.jpg">
                    <p>
                        Hos oss blir du alltid møtt av ansatte som er helsefaglig utdannet, og vi 
                        legger stor vekt på både erfaring og høy kompetanse. Personalet består av 
                        sykepleiere og apotekteknikere, blant annet med spesialisering innen stomi 
                        og urologi, som kan tilby veiledning og tilpasning av utstyr.
                    </p>
                    <p>
                        Vi gjør vårt beste til å holde oss oppdatert på nye produkter som kan være 
                        nyttig for deg, slik at du kan stole på vår kompetanse når vi gir deg råd 
                        og veiledning.
                    </p>
                </InfoAndImage>
                <InfoAndImage title="Trygghet" image="/images/ansatte/ansatte.jpg" >
                    <p>
                        Vårt mål er at du skal føle deg trygg på at du får den hjelpen du trenger 
                        når det gjelder bruk og kjøp av produktene vi tilbyr. Vi er derimot ikke 
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
                        omtrent fem minutter å gå fra stasjon.&nbsp;
                        <HashLink scroll={scrollWithOffset} to={'/kontakt#contact'} className="link">
                            Se våre åpningstider og butikkens adresse her.
                        </HashLink>
                    </p>
                    <p>
                        Med lokal tilhørighet vil vi at du som kunde skal kunne få personlig kontakt 
                        og oppfølging. Mye kan bestilles over telefon, men ofte er det best å få ta 
                        og føle på produkter, samt få personlig veiledning ansikt til ansikt. Det kan 
                        du få hos oss og gjerne over en kopp kaffe/te.
                    </p>
                    <p>
                        Trenger du av ulike årsaker å avtale et hjemmebesøk så er vi aldri langt unna. 
                        Vi er lokalkjent og bor selv her i Follo!&nbsp;
                        <HashLink scroll={scrollWithOffset }to={'/kontakt#contact'} className="link" >
                            Se kontaktinformasjon her.
                        </HashLink>
                    </p>
                </InfoAndImage>
                <InfoAndImage colored center bordered>
                    <h3 className="margin-vertical">Vi er medlem i Banda.</h3>
                    <img src="/images/logo/banda.svg" className="banda-logo" />
                    <p className="margin-vertical">
                        Banda er en norsk kjede med omtrent 50 uavhengige butikker over hele 
                        landet og er sysselsetter av omtrent 200 helsearbeidere. Kjeden er 
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