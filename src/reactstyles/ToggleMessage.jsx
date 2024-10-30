//CSS modules
import React, { useState } from 'react';
import styles from './toggleMessage.module.css';
export function ToggleMessageCSS() {
const [isVisible, setIsVisible] = useState(true);
const toggleVisibility = () => {
    setIsVisible(!isVisible);
};
return (
    <div>
    <h2>Styles using CSS module</h2>
    <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
    </button>
    <p className={isVisible ? styles.message : ''}>This is a hidden message.</p>
    </div>
);
}