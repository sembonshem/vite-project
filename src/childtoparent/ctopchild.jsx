import React from 'react'

class CtopChild extends React.Component {

    sendData = () => {
        setInterval(() => {
            const curtime = Date();
            this.props.parentCallback(curtime);
        }, 1000);
    };

  render() {
    return (
      <div>
      </div>
    );
  }
  componentDidMount() {
    this.sendData();
    console.log('Child component mounted');
  }     


}

export default CtopChild;
