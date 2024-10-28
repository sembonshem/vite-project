import React from "react";
const FuncComp = () => {
    const employee_id = 234;
  return (
    <>
    <h2>This is a functional component</h2>
    <FuncEmployeeData name="Jill from function" employeeId={employee_id} dept_id={987} />
    <FuncEmployeeData dept_id={555} increase={1000} />
    </>
  
);
};

const FuncEmployeeData = (props) => {
    // useState hook manages state of showIncrease value
    //The useState hook creates state variables.
    //In this case, the showIncrease state variable holds a Boolean value indicating
    //whether the app should display the annual salary increase data.
    //
    // it triggers an arrow function defined within the onClick event handler
    // called the setShowIncrease true inside this arrow function.
    // This function sets the state of showIncrease to be true,
    // indicating that the UI should display the annual salary increase. 
    const [showIncrease, setShowIncrease] = React.useState(false);
  return (
    <>
    <div>Name:{props.name}, employeeId:{props.employeeId}, dept_id:{props.dept_id}</div>
    <button onClick={() => setShowIncrease(!showIncrease)}>
        Click here to {showIncrease ? "hide" : "show"}
    </button>
    {showIncrease && <div>Increase: {props.increase}</div>}
    </>

);
};
//set default props
//MUST APPEAR IMMEDATEL before the esport statement
FuncEmployeeData.defaultProps = {
  name: "Default Name",
  employeeId: 123,
  dept_id: 123,
};

export default FuncComp;