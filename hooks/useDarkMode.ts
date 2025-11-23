import { useState, useEffect } from 'react';

/**
 * Custom hook to detect and track dark mode state
 * @returns {boolean} isDark - true if dark mode is active, false otherwise
 */
export const useDarkMode = (): boolean => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial dark mode state
        setIsDark(document.documentElement.classList.contains('dark'));

        // Watch for dark mode changes
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    return isDark;
};
