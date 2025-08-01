import { useAuth } from '../utils/AuthContext.jsx';
import Login from '../components/Login.jsx';
import HolidayManager from '../components/HolidayManager.jsx';
import CommercialManager from '../components/commercials/CommercialManager.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function Ansatt() {

    const { user, logout } = useAuth();

    return (
        <div className="m-2">
            {!user && <Login />}
            {user && (
                <>  
                    <div className="container">
                        <p>{`Hei ${user.user.name}!`}</p>
                        <Button onClick={logout}>Logg ut</Button>
                    </div>
                    <Card className="my-5">
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
