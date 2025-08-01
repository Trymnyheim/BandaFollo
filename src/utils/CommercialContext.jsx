import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext.jsx';

const CommercialContext = createContext(null);

// JSON: { commercials: [ { title, text, disclaimer, img }, ... ] }
// Variable: [ { title, text, disclaimer, img }, ... ]

export function CommercialProvider({ children }) {
    const { user, logout } = useAuth();

    const [commercials, setCommercials] = useState([]);

    const fetchCommercials = async () => {
        try {
            const res = await fetch('http://localhost:5000/commercial/get_commercials');

            if (!res.ok) {
                throw new Error(`Kunne ikke hente reklamedata fra server (${res.status})`);
            }

            const data = await res.json();
            if (data.commercials && data.commercials.length !== 0)
                setCommercials(data.commercials);
            else
                setCommercials([]);
        } catch (err) {
            console.error(err);
        } 
    }

    const addCommercial = async (commercial) => {
        if (!user)
            return { success: false, message: "Kun tilatt for autentiserte brukere"};
        try {    
            
            const formData = new FormData();
            formData.append('title', commercial.title);
            formData.append('text', commercial.text);
            formData.append('disclaimer', commercial.disclaimer);
            if (commercial.image)
                formData.append('image', commercial.image);

            const res = await fetch('http://localhost:5000/commercial/add_commercial', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                },
                body: formData
            })

            if (res.status === 400)
                throw new Error('Ugyldig reklame data');

            if (res.status === 401 || res.status === 403) {
                logout();
                return;
            }
                
            if (!res || !res.ok)
                throw new Error(`Kunne ikke legge til reklame (${res.status})`);

            await fetchCommercials();

            return { success: true, message: 'Reklamen har blitt lagt til' }

        } catch (err) {
            if (err.message === 'Failed to fetch')
                return {success: false, message: 'Kunne ikke kontakte serveren. Sjekk nettverksstatus eller be om hjelp'};
            return { success: false, message: err.message };
        }
    }

    const removeCommercial = async (title) => {
        try {
            const res = await fetch('http://localhost:5000/commercial/remove_commercial', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title })
            })

            if (res.status === 400)
                throw new Error('Ugyldig reklame data');

            if (res.status === 401 || res.status === 403) {
                logout();
                return;
            }

            if (!res.ok)
                throw new Error('Kunne ikke fjerne reklamen');

            setCommercials(commercials.filter((commercial) => commercial.title !== title));

            return { success: true, message: 'Reklamen har blitt fjernet' };
            
        } catch (err) {
            if (err.message === 'Failed to fetch')
                return {success: false, message: 'Kunne ikke kontakte serveren. Sjekk nettverksstatus eller be om hjelp'};
            return { success: false, message: err.message };
        }
    }

    useEffect(() => { fetchCommercials() }, []);

    return (
        <CommercialContext.Provider value={{ commercials, fetchCommercials, addCommercial, removeCommercial }}>
            {children}
        </CommercialContext.Provider>
    )
}

export const useCommercial = () => useContext(CommercialContext)