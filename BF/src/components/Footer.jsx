import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react';
import Shop from './Shop.jsx';

function Footer() {
    const [showShop, setShowShop] = useState(false);
    const handleCloseShop = () => setTimeout(() => setShowShop(false), 0);
    const handleShowShop = () => setShowShop(true);

    const logoStyle = {
        width: '70%'
    }

    return (
        <>
            <div className="footer">
                <div className="footer-item">
                    <Navbar.Brand href="#home">
                        <img style={logoStyle} src="./src/assets/logo.png"/>
                    </Navbar.Brand>
                    <p>Oppegårdveien 2B<br/>1423 SKI</p>
                    <p>+47 64 87 70 00</p>
                    <p>post@bandafollo.no</p>
                </div>
                <div className="footer-item">
                    <div className="shop" onClick={handleShowShop} style={{cursor:'pointer'}}>
                        <img src="./src/assets/cart.png"/>
                        <p>I bandakjeden sin nettbutikk finner du et stort utvalg av våre produkter, inkludert varer på blåresept.</p>
                        <Shop showShop={showShop} handleCloseShop={handleCloseShop}/>
                    </div>
                </div>
                <div className="footer-item">
                    <img style={logoStyle} src="./src/assets/banda_logo.webp"/>
                    <p>Medlem av Bandakjeden</p>
                </div>

            </div>
        </>
    )
}

export default Footer;