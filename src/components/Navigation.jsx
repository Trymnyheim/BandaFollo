import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import useScrollWithOffset from '../utils/useScrollWithOffset.jsx';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Shop from './Shop.jsx';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/AuthContext.jsx';

function Navigation() {

    const {user, logout } = useAuth();
    
    const [showShop, setShowShop] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const scrollWithOffset = useScrollWithOffset();

    const handleCloseShop = () => setTimeout(() => {
            setShowShop(false);
            setExpanded(false);
        }, 0);
        
    const handleShowShop = () => setShowShop(true);

    const handleSelect = () => {
        setExpanded(false);
    };

    return (
        <>
            <Navbar expanded={expanded} onToggle={setExpanded}
                expand="xl" sticky="top" bg="light" data-bs-theme="light"
            >
                <Container>
                    <Navbar.Brand href="/">
                        <img className="logo" src="/images/logo/bandafollo.svg"/>
                    </Navbar.Brand>
                    <div>
                    <Navbar.Toggle />
                    {user &&
                        <Button onClick={logout} className="mx-2"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            Logg ut
                        </Button>}
                    </div>
                    <Navbar.Collapse>
                        <Nav onSelect={handleSelect} className="me-auto" >                            
                            <Nav.Link href="/omoss">OM OSS</Nav.Link>
                            <Nav.Link href="/kontakt">KONTAKT</Nav.Link>
                            <NavDropdown title="TJENESTER" id="basic-nav-dropdown">
                                <NavDropdown.Item 
                                    onClick={handleSelect}
                                    as={HashLink} smooth to="/tjenester#hjemmebesok"
                                    scroll={scrollWithOffset}
                                >
                                    HJEMMEBESØK
                                </NavDropdown.Item>
                                <NavDropdown.Item 
                                    onClick={handleSelect} 
                                    as={HashLink} smooth to="/tjenester#levering" 
                                    scroll={scrollWithOffset}
                                >
                                    LEVERING
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={handleSelect}
                                    as={HashLink} smooth to="/tjenester#veiledning"
                                    scroll={scrollWithOffset}
                                >
                                    RÅD OG VEILEDNING
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/produkter">PRODUKTER</Nav.Link>
                            <Nav.Link onClick={handleShowShop}>NETTBUTIKK</Nav.Link>
                            {user && <Nav.Link href="/ansatt">FOR ANSATTE</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Shop showShop={showShop} handleCloseShop={handleCloseShop}/>
        </>
    )
}

export default Navigation;