import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Shop from '../components/Shop.jsx';
import { useState } from 'react';

const logoStyle = {
    height: '50px'
}

function Navigation(openShop) {

    const [showShop, setShowShop] = useState(false);
    const handleCloseShop = () => setTimeout(() => setShowShop(false), 0);
    const handleShowShop = () => setShowShop(true);

    return (
        <>
            <Navbar  expand="lg" fixed="top" bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img style={logoStyle} src="./src/assets/logo.png"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
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