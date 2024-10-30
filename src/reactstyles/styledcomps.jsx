//Styled components
import React, { useState } from 'react';

export function InlineStyle() {
    return (
        <>
        <h3>Inline styles</h3>
        <div style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '5px' }}>
          <p style={{ color: 'white', fontSize: '18px' }}>This is a paragraph with inline styles.</p>
          <p style={{color: "red", fontSize: "20px", fontWeight: "bolder"}}>inline styles yet again</p>
        </div>
        </>
      );
}

export function ToggleMessageComps() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const messageStyle = {
    display: isVisible ? 'block' : 'none',
    color: 'green',
    fontSize: '18px',
    marginTop: '10px'
  };
  return (
    <div>
      <h2>Directly styled components</h2>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      <p style={messageStyle}>This is a hidden message.</p>
    </div>
  );
}