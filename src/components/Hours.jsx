import { useContext, useEffect, useState } from 'react';
import { HolidayContext } from '../utils/HolidayContext';
import Card from 'react-bootstrap/Card'
import hours from '../utils/hours.json';

function Hours({ children }) {

    const [holiday, setHoliday] = useState(null);

    const {
        isChristmas, isEaster, isSummer,
        setIsChristmas, setIsEaster, setIsSummer }
        = useContext(HolidayContext);

    useEffect(() => {
        if (isChristmas) {
            setHoliday(hours.christmas);
        } else if (isEaster) {
            setHoliday(hours.easter);
        } else if (isSummer) {
            setHoliday(hours.summer);
        } else {
            setHoliday(null);
        }
    }, [isChristmas, isEaster, isSummer]);

    const capitalize = (str) => {
        if (!str)
            return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title className="bold" >Åpningstider</Card.Title>
                    {children}
                    {holiday &&
                        <div className={`holiday-hours ${holiday.title}`}>
                            <br/>
                            <Card.Title className="bold">
                                {capitalize(holiday.title)} {hours.year}
                            </Card.Title>
                            <ul>
                                {holiday.times.map((val, index) => (
                                    <li key={index}>{val}</li>
                                ))}
                                <img src={holiday.img} />
                            </ul>
                        </div>
                    }
            </Card.Body>
        </Card>
    )
}

export default Hours;