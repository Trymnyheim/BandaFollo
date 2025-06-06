import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const logoStyle = {
    height: '50px'
}

function Menylinje() {
    return (
        <>
            <Navbar  expand="lg" fixed="top" bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={logoStyle} src="./src/assets/logo.png"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="#">OM OSS</Nav.Link>
                            <Nav.Link href="#">KONTAKT</Nav.Link>
                            <Nav.Link href="#">TJENESTER</Nav.Link>
                            <Nav.Link href="#">PRODUKTER</Nav.Link>
                            <Nav.Link href="#">BLÅRESEPT</Nav.Link>
                            <Nav.Link href="#">NETTBUTIKK</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        
    )
}

export default Menylinje;