import { AuthProvider } from "./AuthContext";
import HolidayProvider from "./HolidayContext";
import { CommercialProvider } from "./CommercialContext";

export default function AppContextProvider({ children }) {
    return (
        <AuthProvider>
            <HolidayProvider>
                <CommercialProvider>
                    {children}
                </CommercialProvider>
            </HolidayProvider>
        </AuthProvider>
    )
}