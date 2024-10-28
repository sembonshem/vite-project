import React from 'react';
function FuncUseState() {
// The useState hook allows you to add
// state management functionalities to function components.
// It returns a stateful value using
// one variable and a function
// to update the value of that variable. 
// you pass the intial state as a parameter

//This syntax uses array destructuring for the const variable.
//When you call setStateName,
// React will re-render the component
// with the updated state value
const [count, setCount] = React.useState(0);
const [color, setColor] = React.useState('red');
const txtstyle = {color:color};
const setColorGreen = () => {setColor("green")};

    return (
        <>
        <h2>Function component with useState</h2>
        <input type='number' value={count} onChange={(e) => setCount(e.target.value)} />
        <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />
        <div style={txtstyle}>count:{count}</div>
        <button onClick={setColorGreen} >Force color to Green</button>
        </>

    )
}

export default FuncUseState;