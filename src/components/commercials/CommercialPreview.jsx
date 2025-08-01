import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Commercial from './Commercial.jsx';

function CommercialPreview({commercial, hide, show}) {


    return (
        <Modal
            onHide={hide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Forhåndvisning
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {commercial && <Commercial commercial={commercial} />}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={hide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CommercialPreview;