import { createContext, useState } from 'react';

export const HolidayContext = createContext();

function HolidayProvider({ children }) {
    const [isChristmas, setIsChristmas] = useState(false);
    const [isEaster, setIsEaster] = useState(false);
    const [isSummer, setIsSummer] = useState(false);

    return (
        <HolidayContext.Provider
            value={{ isChristmas, setIsChristmas, isEaster, setIsEaster, isSummer, setIsSummer }}
        >
            {children}
        </HolidayContext.Provider>
    )
}

export default HolidayProvider;
