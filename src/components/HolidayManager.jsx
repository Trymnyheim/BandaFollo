import { HolidayContext } from '../utils/HolidayContext.jsx';
import { useAuth } from '../utils/AuthContext.jsx';
import { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function HolidayManager() {

    const { user } = useAuth();
    const { selectedHoliday, setSelectedHoliday, hours, setHours,
        allHours, setAllHours, updateHoliday, fetchHolidays,
    } = useContext(HolidayContext);

    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleHolidaySubmit = async (e) => {
        e.preventDefault();
        const updatedHours = allHours[selectedHoliday] || [];
        const res = await updateHoliday(selectedHoliday, updatedHours);
        setMessage(res.message);
        if (res.success)
            setError(false);
        else {
            setError(true);
        }
    }

    const handleHourChange = (index, field, value) => {
        const updated = [...(allHours[selectedHoliday] || [])];
        updated[index] = { ...updated[index], [field]: value };

        setAllHours(prev => ({
            ...prev,
            [selectedHoliday]: updated
        }));

        setHours(updated);
    }

    const addHourEntry = () => {
        const updated = [...(allHours[selectedHoliday] || []), { day: '', time: '' }];
        setAllHours(prev => ({
            ...prev,
            [selectedHoliday]: updated
        }));
        setHours(updated);
    }

    const removeHourEntry = (index) => {
        const updated = [...(allHours[selectedHoliday] || [])];
        updated.splice(index, 1);
        setAllHours(prev => ({
            ...prev,
            [selectedHoliday]: updated
        }));
        setHours(updated);
    }

    const moveHourEntry = (index, direction) => {
        const current = [...(allHours[selectedHoliday] || [])];
        const targetIndex = index + direction;

        if (targetIndex < 0 || targetIndex >= current.length) return;

        const temp = current[index];
        current[index] = current[targetIndex];
        current[targetIndex] = temp;

        setAllHours(prev => ({
            ...prev,
            [selectedHoliday]: current
        }));
        setHours(current);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchHolidays();
            if (!res || !res.holidays) return;

            const active = res.holidays.find(h => h.is_active === 1);
            if (active) setSelectedHoliday(active.holiday);
        };
        if (user) fetchData();
    }, [user])

    useEffect(() => {
        if (selectedHoliday && allHours[selectedHoliday]) {
            setHours(allHours[selectedHoliday]);
        }
        setError(false);
    }, [selectedHoliday, allHours]);

    useEffect(() => {
        setMessage('');
    }, [selectedHoliday]);


    return (
        <Form onSubmit={handleHolidaySubmit} style={{maxWidth: '700px', display: 'flex', flexDirection: 'column', margin: 'auto', textAlign: 'center'}}>
            <Form.Label className="fs-5 my-4">Velg ferie</Form.Label>
            <div className="holiday-selector" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {['christmas', 'easter', 'summer', ''].map((holiday, index) => (
                    <Form.Check key={holiday} type="radio"
                        label={['Jul', 'Påske', 'Sommer', 'Ingen'][index]}
                        name="holiday" value={holiday} className="mx-3"
                        checked={selectedHoliday === holiday}
                        onChange={(e) => {setSelectedHoliday(e.target.value)}}
                    />
                ))}
            </div>
            <br/>
            {selectedHoliday ? (
                <>
                    <Form.Label className="fs-5 my-4">Rediger timer</Form.Label>
                    {hours.map((entry, index) => (
                        <div key={index} className="mb-4 d-flex gap-4 align-items-center">
                            <Form.Control type="text" value={entry.day}
                                onChange={(e) => handleHourChange(index, 'day', e.target.value)}
                                placeholder="Dag / Dato" style={{ maxWidth: '' }}
                            />
                            <Form.Control type="text" value={entry.time}
                                onChange={(e) => handleHourChange(index, 'time', e.target.value)}
                                placeholder="Åpningstid" style={{ maxWidth: '' }}
                            />
                            <div className="d-flex flex-column gap-1">
                                <Button variant="outline-success" size="sm" disabled={index === 0}
                                    onClick={() => moveHourEntry(index, -1)}
                                >
                                    ↑
                                </Button>
                                <Button variant="outline-success" size="sm" disabled={index === hours.length - 1}
                                    onClick={() => moveHourEntry(index, 1)}
                                >
                                    ↓
                                </Button>
                            </div>
                            <Button variant="danger" size="sm"
                                onClick={() => removeHourEntry(index)}
                            >
                                Slett
                            </Button>
                        </div>
                    ))}
                    <Button className="mb-3" onClick={addHourEntry} style={{width: '300px', margin:' auto'}}>
                        Legg til ny rad
                    </Button>
                </>
            ) : (
                <p>Ingen timer å redigere når ingen ferie er valgt.</p>
            )}
            <Button type="submit" variant="success" style={{width: '300px', margin:' auto'}}>
                Lagre ferieinfo
            </Button>
            <p className={`mt-3 ${error ? 'text-danger' : 'text-success'}`}>{message}</p>
        </Form>
    )
}

export default HolidayManager;