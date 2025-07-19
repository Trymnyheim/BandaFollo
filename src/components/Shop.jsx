import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Shop({ showShop, handleCloseShop }) {

    const toShop = () => {
        handleCloseShop();
        window.open("https://www.banda.no/", "_blank");
    }

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
                    <Button variant="success" onClick={toShop}>Til nettbutikken</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Shop;