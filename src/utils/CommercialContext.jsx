import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext.jsx';

const CommercialContext = createContext(null);

// { commercials: [ { title, text, disclaimer, img }, ... ] }

export function CommercialProvider({ children }) {
    const { user } = useAuth();

    const [commercials, setCommercials] = useState(null);

    const fetchCommercials = async () => {
        try {
            const res = await fetch('http://localhost:5000/commercials/get_commercials');

            if (!res.ok) {
                throw new Error(`Kunne ikke hente reklamedata fra server (${res.status})`);
            }

            const data = await res.json();
            if (data.commercials && data.commercials.length !== 0)
                setCommercials(data.commercials);
            else
                setCommercials(null);
        } catch (err) {
            console.error(err);
        } 
    }

    const updateCommercials = async () => {
        if (!user)
            return { success: false, message: "Kun tilatt for autentiserte brukere"};
        try {            
            const res = await fetch('http://localhost:5000/commercials/set_commercials', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ commercials: commercials })
            })

            if (res.status === 400)
                throw new Error('Ugyldig reklame data');

            if (res.status === 401)
                throw new Error('Kunne ikke autorisere bruker');

            if (!res.ok)
                throw new Error(`Kunne ikke oppdatere reklamene (${res.status})`);

            return { success: true, message: "Reklamene har blitt oppdatert"}

        } catch (err) {
            return { success: false, message: err.message };
        }
    }

    useEffect(() => { fetchCommercials() }, []);

    return (
        <CommercialContext.Provider value={{ commercials, setCommercials, updateCommercials }}>
            {children}
        </CommercialContext.Provider>
    )
}

export const useCommercial = () => useContext(CommercialContext)