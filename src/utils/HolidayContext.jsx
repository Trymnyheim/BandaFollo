import { createContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext.jsx';

export const HolidayContext = createContext();

function HolidayProvider({ children }) {
    const { user, logout } = useAuth();
    const [selectedHoliday, setSelectedHoliday] = useState('');
    const [hours, setHours] = useState([]);
    const [allHours, setAllHours] = useState({}); // for admin

    // Fetch active holiday on load
    useEffect(() => {
        const fetchActiveHoliday = async () => {
            try {
                const res = await fetch('https://api.bandafollo.no/holiday/get_holiday');
                
                if (!res.ok) throw new Error('Kunne ikke hente aktiv feriedata');

                const data = await res.json();

                if (!data.holiday) {
                    setSelectedHoliday('');
                    setHours([]);
                    return;
                }

                setSelectedHoliday(data.holiday);

                if (data.hours && Array.isArray(data.hours[data.holiday])) {
                    setHours(data.hours[data.holiday]);
                } else {
                    setHours([]);
                }
            } catch (err) {
                console.error('fetchActiveHoliday error:', err.message);
                setSelectedHoliday('');
                setHours([]);
            }
        };

        fetchActiveHoliday();
    }, [user]);

    // Set active holiday and update DB
    const updateHoliday = async (holidayToSet, hoursToSet) => {
        if (!user) return { success: false, message: 'User not authenticated' };

        try {
            console.log(JSON.stringify({ activeHoliday: holidayToSet, hours: allHours }));
            const res = await fetch('https://api.bandafollo.no/holiday/set_holiday', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ activeHoliday: holidayToSet, hours: allHours }),
            });

            if (res.status === 401 || res.status === 403) {
                logout();
                return;
            }

            if (!res.ok) {
                const err = await res.json();
                return { success: false, message: err?.error || 'Noe gikk galt' };
            }

            const data = await res.json();
            setSelectedHoliday(holidayToSet);
            setHours(hoursToSet);
            setAllHours(prev => ({
                ...prev,
                [holidayToSet]: hoursToSet,
            }));
            return { success: true, message: 'Ferien ble oppdatert', data };
        } catch (err) {
            return { success: false, message: err.message };
        }
    };

    const fetchHolidays = async () => {
        if (!user) return null;

        try {
            const res = await fetch('https://api.bandafollo.no/holiday/get_holidays', {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            });

            if (res.status === 401 || res.status === 403) {
                logout();
                return;
            }

            if (!res.ok) throw new Error('Kunne ikke hente ferieliste');

            const data = await res.json();
            setAllHours(data.hours || {});
            return data; // { holidays: [...], hours: {...} }
        } catch (err) {
            console.error('fetchHolidays error:', err.message);
            return null;
        }
    };

    return (
        <HolidayContext.Provider
            value={{
                selectedHoliday,
                setSelectedHoliday,
                hours,
                setHours,
                allHours,
                setAllHours,
                updateHoliday,
                fetchHolidays,
            }}
        >
            {children}
        </HolidayContext.Provider>
    );
}

export default HolidayProvider;
