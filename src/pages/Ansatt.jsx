import { useAuth } from '../utils/AuthContext.jsx';
import Login from '../components/Login.jsx';
import HolidayManager from '../components/HolidayManager.jsx';
import CommercialManager from '../components/commercials/CommercialManager.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function Ansatt() {

    const { user } = useAuth();

    return (
        <div className="mx-2">
            {!user && 
                <>
                    <div className="py-3 login">
                        <h1 className="my-3 center">For ansatte</h1>
                        <p>
                            Innlogging kreves for å gjøre endringer på nettsiden.
                            Ved problemer med innlogging eller behov for opprettelse av konto, ta kontakt med administrator.
                        </p>
                    </div>
                    <Login />
                </>
            }
            {user && (
                <>  
                    <h1 className="center p-5">Hei {user.user.name}!</h1>
                    <Card>
                        <Card.Title className="bold fs-3 center mt-4">
                            Velg ferie
                        </Card.Title>
                        <Card.Body>
                            <HolidayManager />
                        </Card.Body>
                    </Card>
                    <Card className="my-5">
                        <Card.Title className="bold fs-3 center mt-4">
                            Juster reklamer
                        </Card.Title>
                        <Card.Body>
                            <CommercialManager />
                        </Card.Body>
                    </Card>
                </>
            )}
        </div>
    );
}

export default Ansatt;
