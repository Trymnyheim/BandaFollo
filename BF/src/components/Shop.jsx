import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Shop({showShop, handleCloseShop}) {
    return (
        <>
            <Modal show={showShop} onHide={handleCloseShop}>
                <Modal.Header closeButton>
                    <Modal.Title>Nettbutikk</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Du blir nå videreført til Banda's nettbutikk.</p>
                    <p>For å få varene leverte fra oss, velg BandaFollo ved betaling.</p>
                </Modal.Body>
    
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseShop}>Lukk</Button>
                    <a href="https://www.banda.no/" target="_blank">
                        <Button variant="primary" onClick={handleCloseShop}>Til nettbutikken</Button>
                    </a>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Shop;