import Card from 'react-bootstrap/Card';

function Kontakt() {

    const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "350px", 
        gap: "24px", 
        margin: "auto"
    }

    const contactStyle = {
        display: "flex",
        gap: "24px",
        margin: "12px"
    }

    const imageStyle = {
        maxWidth: "650px",
        width: "100%",
        height: "auto",
        objectFit: "cover",
        margin: "24px auto"
        
    }

    return (
        <>
            <div className="center padding" >
                <h1>Kontakt oss</h1>
                <h4>Om det er noe vi kan hjelpe deg med, ta gjerne kontakt på telefon eller e-post.<br/>Du er også hjertelig velkommen i vår butikk!</h4>
            </div>
            <div className="container" style={{marginBottom: '24px'}}>                
                <img src="/images/butikk/stol.jpg" className= "image" style={imageStyle} />
                <div style={containerStyle}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="bold" >Kontaktinfo</Card.Title>
                            <Card.Text>
                                <div style={contactStyle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>
                                    <a href="tel:+4764877000">+47 64 87 70 00</a>
                                </div>
                                <div style={contactStyle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
                                    <a href="mailto:post@bandafollo.no">post@bandafollo.no</a>
                                </div>
                                <div style={contactStyle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/></svg>
                                    <p>Oppegårdveien 2B, 1423 Ski</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title className="bold" >Åpningstider</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Mandag - Fredag: 09:00 - 17:00</li>
                                    <li>Lørdag - Søndag: Stengt</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.7216230196955!2d10.826401276920853!3d59.720820679622626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46415d1d8ead1f19%3A0x6f84efd1aade62f9!2sBanda%20Follo%20AS!5e0!3m2!1sno!2sno!4v1749665695375!5m2!1sno!2sno" width="100%" height="500" style={{border: "0"}} allowFullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>    
        </>
    )
}

export default Kontakt;