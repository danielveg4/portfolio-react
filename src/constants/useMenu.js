import { useState, useEffect } from 'react';

export const useMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [menuIcon, setMenuIcon] = useState('Hamburger_icon.svg.png');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setShowMenu(!isMobile);
    }, [isMobile]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        if (showMenu) {
            setMenuIcon('Hamburger_icon.svg.png');
        } else {
            setMenuIcon('cross.svg');
        }
    };

    return { showMenu, isMobile, menuIcon, toggleMenu };
};