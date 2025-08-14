import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { checkLength, validatePassword } from '../utils/Validation';
import { useAuth } from '../utils/AuthContext';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [validName, setValidName] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useAuth();

    const handleLogin = async (event) => {
        event.preventDefault();
        const nameVal = checkLength(name);
        const passVal = validatePassword(password);
        setValidName(nameVal);
        setValidPassword(passVal);
        if (!nameVal || !passVal)
            return;
        try {
            const res = await fetch('https://api.bandafollo.no/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: name, password: password }),
            });

            if (res.status === 401) {
                throw new Error('Ugyldig brukernavn eller passord');
            }

            if (!res.ok) {
                throw new Error('Kunne ikke nå server');
            }

            const data = await res.json();
            login(data);
            setErrorMessage('');
        } catch (err) {
            setErrorMessage(err.message);
        }
    }

    return (
        <>
            <Form onSubmit={handleLogin} className="login">
                <Form.Label>Brukernavn:</Form.Label>
                <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} ></Form.Control>
                {!validName && <p className="error">ugyldig navn.</p>}
                <Form.Label>Passord:</Form.Label>
                <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} ></Form.Control>
                {!validPassword && 
                <p className="error">Ugyldig passord.</p>}
                <p>{errorMessage}</p>
                <Button type='submit' variant="success">Login</Button>
            </Form>
        </>
    )
}

export default Login;