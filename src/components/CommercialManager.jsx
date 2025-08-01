import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useCommercial } from '../utils/CommercialContext.jsx';
import CommercialPreview from './CommercialPreview.jsx';
import './commercial.css';

function CommercialManager() {
    const [newTitle, setNewTitle] = useState('');
    const [newText, setNewText] = useState('');
    const [newDisclaimer, setNewDisclaimer] = useState('');
    const [newImage, setNewImage] = useState(null);
    const [previewCommercial, setPreviewCommercial] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const {
        commercials, 
        addCommercial, 
        removeCommercial
    } = useCommercial();

    const handleAdd = async (e) => {
        e.preventDefault();
        if (commercials.find((commercial) => (commercial.title === newTitle))) {
            setMessage('Tittelen må være unik');
            setError(true);
        }
        else if (!newTitle || !newText || !newDisclaimer) {
            setMessage('Alle felt må være fylt ut');
            setError(true);
        }
        else if (!newImage) {
            setMessage('Du har ikke lastet opp et bilde');
            setError(true);
        }
        else {
            const res = await addCommercial({title: newTitle, text: newText, disclaimer: newDisclaimer, image: newImage});
            setMessage(res.message)
            if (res.success)
                setError(false);
            else    
                setError(true);
        }
    }

    const handleRemove = async (title) => {
        const res = await removeCommercial(title);
        alert(res.message);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && ['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
            setNewImage(file);
            setMessage('');
            setError(false);
        } else {
            setMessage('Bildet må være i formatet png, jpg, jpeg eller webp');
            setError(true);
        }
    }

    const discard = () => {
        setNewTitle('');
        setNewText('');
        setNewDisclaimer('');
        setNewImage(null);
        setMessage('');
        setError(false);
    }

    const showPreview = (title) => {
        console.log(title);
        const selected = commercials.find((commercial) => commercial.title === title);
        setPreviewCommercial(selected);
        console.log(selected);
    }

    const closePreview = () => {
        setPreviewCommercial(null);
    }

    return (
        <div className="commercial-manager-container">
            <div className="commercial-list">
                <h3 className="center mb-5">Aktive reklamer</h3>
                {commercials && commercials.length > 0 ?
                    commercials.map((commercial, index) => (
                        <div key={index} className="commercial-entry">
                            <p className="mx-3">{commercial.title}</p>
                            <div className="buttons">
                                <Button onClick={() => showPreview(commercial.title)}>
                                    Vis
                                </Button>
                                <Button onClick={() => handleRemove(commercial.title)} variant="danger">
                                    Slett
                                </Button>
                            </div>
                        </div>
                    ))
                :   <div className="commercial-entry empty">
                        <p>Ingen aktive reklamer</p>
                    </div>
                }
            </div>
            <div className="add-commercial-form">
                <h3 className="center mb-4">Legg til ny reklame</h3>
                <Form onSubmit={handleAdd}>
                    <Form.Group className="mb-3">
                        <Form.Label>Overskrift</Form.Label>
                        <Form.Control
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tekst</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Framhevet tekst</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            value={newDisclaimer}
                            onChange={(e) => setNewDisclaimer(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label>Bilde</Form.Label>
                        <Form.Control
                            type="file"
                            accept=".png, .jpg, .jpeg, .webp"
                            onChange={handleImageChange}
                        />
                    </Form.Group>
                    <Form.Label className={error ? 'text-danger' : 'text-success'}>
                        {message}.
                    </Form.Label>
                    <br/>
                    <Button type="submit" variant="primary">
                        Last opp
                    </Button>
                    <Button onClick={discard} variant="danger" className="m-3">
                        Avslutt endring
                    </Button>
                </Form>
            </div>
            <CommercialPreview 
                commercial={previewCommercial}
                show={previewCommercial !== null}
                hide={closePreview}
            />
        </div>
    );
}

export default CommercialManager;
