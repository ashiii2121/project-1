import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../pages/Context/ThemeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            className="dark-mode-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
        >
            <div className={`toggle-track ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="toggle-thumb">
                    {isDarkMode ? <FaMoon /> : <FaSun />}
                </div>
            </div>
        </button>
    );
};

export default DarkModeToggle;
