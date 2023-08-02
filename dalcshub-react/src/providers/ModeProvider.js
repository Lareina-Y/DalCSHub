//Author: Shiwen(Lareina) Yang
import { useState, useContext, createContext, useMemo, useCallback } from 'react';

const ModeContext = createContext();

export function useMode() {
    return useContext(ModeContext);
}

export const ModeProvider = ({ children }) => {
    const storedMode = localStorage.getItem("mode");

    const [mode, setMode] = useState(storedMode ?? 'light');

    const toggleMode = useCallback (() => 
        {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            localStorage.setItem("mode", mode);
        }, [mode]
    );

    const modeContextValue = useMemo(
        () => ({ mode, toggleMode }),
        [ mode, toggleMode ]
      );
    

    return (
        <ModeContext.Provider value={modeContextValue}>
          {children}
        </ModeContext.Provider>
      );

};
