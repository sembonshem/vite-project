import React, { useState } from 'react';

const ItemList = () => {
  // State variable to hold the list of items
  const [items, setItems] = React.useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);
  const [inputValue, setInputValue] = useState('');

  // Event handler to add an item
  const addItem = () => {
    if (inputValue.trim() === '') return; // Prevent adding empty items
    setItems([...items, inputValue]); // Add the new item to the array
    setInputValue(''); // Clear the input field
  };

  // Event handler to remove an item
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index); // Create a new array without the removed item
    setItems(newItems); // Update the state with the new array
  };

  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value on change
        placeholder="Enter an item"
      />
      <button onClick={addItem}>Add Item</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;