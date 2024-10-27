import React from 'react'

class TestUnmount extends React.Component {
    constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidDismount() {
    console.log("componentDidDismount");
  }
  render() {
    const txtstyle = {
        color: this.props.color
    };
    return <h1 style={txtstyle}>Inner component {this.props.name}</h1>;
  }
}

export default TestUnmount;