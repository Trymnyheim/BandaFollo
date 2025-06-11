import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Shop from '../components/Shop.jsx';
import { useState } from 'react';
import BackToTop from './BackToTop.jsx';

const logoStyle = {
    height: '50px'
}

function Navigation(openShop) {

    const [showShop, setShowShop] = useState(false);
    const handleCloseShop = () => setTimeout(() => setShowShop(false), 0);
    const handleShowShop = () => setShowShop(true);

    return (
        <>
            <Navbar expand="md" sticky="top" bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img style={logoStyle} src="./src/assets/logo.png"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            {/*
                            <Nav.Link href="/"><svg xmlns="http://www.w3.org/2000/svg" stroke="grey" fill="grey" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path></svg></Nav.Link>
                            */}
                            <Nav.Link href="/omoss">OM OSS</Nav.Link>
                            <Nav.Link href="/kontakt">KONTAKT</Nav.Link>
                            <Nav.Link href="/tjenester">TJENESTER</Nav.Link>
                            <Nav.Link href="/produkter">PRODUKTER</Nav.Link>
                            <Nav.Link href="/blaaresept">BLÅRESEPT</Nav.Link>
                            <Nav.Link onClick={handleShowShop}>NETTBUTIKK</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Shop showShop={showShop} handleCloseShop={handleCloseShop}/>
        </>
        
    )
}

export default Navigation;