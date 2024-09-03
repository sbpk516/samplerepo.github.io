//Need to come up with a simple exaample of useContext
import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a component that uses the context
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '10px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      Toggle Theme
    </button>
  );
}

// Main component
function ContextUse() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>useContext Example</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}

export default ContextUse;