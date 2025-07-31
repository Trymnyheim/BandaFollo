import { useContext, useEffect, useState } from 'react';
import { HolidayContext } from '../utils/HolidayContext';
import Card from 'react-bootstrap/Card'

function Hours({ children }) {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    const {
            selectedHoliday, hours }
        = useContext(HolidayContext);

    const setHoliday = () => {
        if (selectedHoliday === 'christmas') {
            setTitle('julen');
            setImage('/images/decor/christmas.png');
        } else if (selectedHoliday === 'easter') {
            setTitle('påsken');
            setImage('/images/decor/easter.png');
        } else if (selectedHoliday === 'summer') {
            setTitle('sommer');
            setImage('/images/decor/summer.png');
        }
    }

    useEffect(() => setHoliday, []);
    useEffect(() => setHoliday), [selectedHoliday];

    return (
        <Card>
            <Card.Body>
                <Card.Title className="bold" >Åpningstider</Card.Title>
                    {children}
                    {(selectedHoliday && hours.length !== 0) &&
                        <div className={`holiday-hours ${selectedHoliday}`}>
                            <br/>
                            <Card.Title className="bold">
                                Åpningstider i {title}
                            </Card.Title>
                            <ul>
                                {hours.map((val, index) => (
                                    <li key={index}>{val.day}: {val.time}</li>
                                ))}
                                <img src={image} />
                            </ul>
                            <p>Pass på å bestill varene du trenger i ferien i god tid!</p>
                        </div>
                    }
            </Card.Body>
        </Card>
    )
}

export default Hours;