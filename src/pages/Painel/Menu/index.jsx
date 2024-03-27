import React from 'react'
import { useEffect, useState } from 'react'

import MenuMobile from './mobile'
import MenuDesktop from './desktop';

function Menu() {

    const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <>
            {
                windowSize.width < 1024 ? <MenuMobile /> : <MenuDesktop />
            }
        </>

    )
}

export default Menu