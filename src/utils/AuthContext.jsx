import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
      setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('userData');
    setUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);

      fetch('https://api.bandafollo.no/user/validate', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${parsed.accessToken}`,
        },
      })
        .then(res => {
          if (!res.ok) throw new Error('Token invalid or expired');
          return res.json();
        })
        .then(data => {
          setUser(parsed); 
        })
        .catch(() => {
          logout(); // Remove invalid token
        });
    }
  }, []);


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
