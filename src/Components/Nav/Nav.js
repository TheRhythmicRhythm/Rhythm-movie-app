import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener('scrollY');
        };
    }, [])


    return (
        <div 
        className={`nav ${show && 'nav__black'} 
        `}>
           <h1 className="nav__logo">
               Rhythm's Movie Hub
            </h1>

            <h1 className="nav__avatar">
              
            </h1>
        </div>
    )
}

export default Nav