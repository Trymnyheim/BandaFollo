import Slideshow from '../components/Slideshow.jsx';

function OmOss() {

    const image = {
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const topStyle = {
        ...image,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start'
    }

    const lowerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    }

    const lowerLeftStyle = {
        flex: '1 1 300px',
        display: 'flex',
        flexDirection: 'column',
    }

    const box1Style = {
        flex: '1 1 60%',
        width: '100%',
    }

    const box2Style = {
        ...image,
        backgroundImage: `url("/images/butikk/toyogsko.jpg")`,
        width: '100%',
        height: '25rem'
    }

    const box3Style = {
        width: '100%',
        height: '25rem',
        border: 'solid 1px black'
    }

    const images = [
        {url: "/images/raad_veiledning.jpg"},
        {url: "/images/test.jpg"}
    ]

    return (
        <>
            <div className="container">
                <img src="/images/ansatte/ansatte.jpg" style={{width: '100%'}}/>
                <div style={topStyle}>
                    {/*
                    <div style={{...overlay, marginTop: '32px'}}>
                        <h2>Din lokale bandagist i Ski</h2>
                    </div>
                    */}
                </div>
                <div style={lowerStyle}>
                    <div style={box1Style}>
                        <div className="container padding">
                            <h2>Kompetanse</h2>
                            <p>Hos oss blir du alltid møtt av ansatte som er helsefaglig utdannet, og vi legger stor vekt på både erfaring og høy kompetanse.</p>
                        </div>
                        <div className="container padding">
                            <h2>Trygghet</h2>
                            <p>Vårt mål er at du skal føle deg trygg på at du får den hjelpen du trenger når det gjelder bruk og kjøp av de ulike produktene vi fører. Du skal føle deg trygg på at vi vil gjøre vårt beste til å holde oss oppdatert i nye produkter som vil være til nytte for deg. Du skal føle deg trygg på vår kompetanse når vi gir deg råd og veiledning.</p>
                        </div>
                        <div className="container padding">
                            <h2>Tilgjengelighet</h2>
                            <p>Banda Follo er den eneste bandagistbutikken i vårt distrikt. Butikken ligger sentralt i Ski/Follo og har åpent fra mandag til fredag kl. 09:00-1700. Med lokal tilhørighet vil vi at du som kunde skal kunne få personlig kontakt og oppfølging. Mye kan bestilles over telefon, men ofte er det best å få ta og føle på produkter, samt få personlig veiledning ansikt til ansikt. Det kan du få hos oss og gjerne over en kopp kaffe/te. Vi legger stor vekt på diskresjon så hvis du ønsker det kan vårt samtale/prøverom benyttes. Alle våre medarbeidere har taushetsplikt. Trenger du av ulike årsaker å avtale et hjemmebesøk så er vi aldri langt unna. Vi er lokalkjent og bor selv her i Follo!</p>
                        </div>
                    </div>
                    <div style={lowerLeftStyle}>
                        <div style={box3Style}>
                            <div className= "container b-primary center padding" style={{width: '100%', height: '100%'}}>
                                <img src="/images/logo/banda.svg" className="banda-logo" style={{margin: 'auto'}} />
                                <div>
                                    <h3 className="margin-vertical">Vi er medlem i Banda.</h3>
                                    <p>Banda er en norsk kjede med omtrent 50 uavhengige butikker over hele landet og er sysselsetter av omtrent 200 helsearbeidere. Kjeden er unikt eiet av de lokale eierne av butikkene.</p>
                                </div>
                            </div>
                        </div>
                        <div style={box2Style}>

                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '48px', height: '500px'}}>
                <h1 className="center">Sjekk ut vår butikk</h1>
                <Slideshow images={images} time={10000} withArrows={true} />
            </div>
        </>
    )
}

export default OmOss;