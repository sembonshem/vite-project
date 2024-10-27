import React from "react";
import TestUnmount from './testunmount.jsx';
import CtopParent from "./childtoparent/ctopparent.jsx";
import ContentRating from "./contentrating/contentratng.jsx";

class ClassComp extends React.Component {
    
    state = {
        count: 0, InnerComponent: <TestUnmount name="a prop" color="black" />, childcolor : "red",
    };

    incrementCOunter = () => {
        this.setState({count: this.state.count + 1});
        this.setState({ InnerComponent: <TestUnmount color="pink" name={this.state.count} /> });
    }

    // when mounting 1st
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    // when mounting 2nd
    //The getDerivedStateFromProps method is used
    //only when the state depends on the changes to props.
    // when updating 1st
    //only when the state depends on the changes to props.
    // getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps");
    //     return null;
    // }

    // when mounting 4rd
    componentDidMount() {
        console.log("componentDidMount");
    }

    // when updating 2st
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        // return false to stop the update
        return true;
    }

    
    // when updating 4th
    //invoked just before the changes are rendered.
    // It helps keep track of what has changed.
    // Any value returned by this lifecycle,
    // will be passed as a parameter
    // to the componentDidUpdate method,
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        console.log("previous state"+ prevState.count);
        console.log("new state"+ this.state.count);
        return null;
    }


    // when updating 5th
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }


    // when mounting 3rd
    // when updating 3rd
    //reder must have one parent element
    render() {
        console.log("render");
        return (
            <div>
                <p>content rating</p>
                <ContentRating />
                <p>This is a class component</p>
                <button onClick={this.incrementCOunter}>Click here {this.state.count}</button>
                <br />
                {this.state.InnerComponent}
                <br />
                <button onClick={() => this.setState({ childcolor: "purple" })} >change color</button>
                <TestUnmount name={this.state.count} color={this.state.childcolor} />
                <br />
                <CtopParent />
            </div>
        );
    }

    // when unmounting 1st
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    // when unmounting 2st
    componentDidDismount() {
        console.log("componentDidDismount");
    }

}

export default ClassComp;