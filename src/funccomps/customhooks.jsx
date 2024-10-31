
import { useState } from 'react';

// Custom hook for toggle functionality
const useToggle = (initialState = false) => {
    const [isToggled, setIsToggled] = useState(initialState);
    
    const toggle = () => {
        setIsToggled(prev => !prev);
    };
    
    return [isToggled, toggle];
};

// Toggle Button Component
const ToggleButton = () => {
    const [isOn, toggleState] = useToggle();
    
    return (
        <>
        <h4>Custom hook for toogle button</h4>
        <button 
            onClick={toggleState}
            style={{
                backgroundColor: isOn ? '#4CAF50' : '#f44336',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            {isOn ? 'ON' : 'OFF'}
        </button>
        </>
    );
};

export { useToggle, ToggleButton };
