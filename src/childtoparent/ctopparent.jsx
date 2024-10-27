import React from 'react';
import CtopChild from './ctopchild.jsx';

class CtopParent extends React.Component {
    state = {
        time: "",
    }
    func1 = (childdata) => {
        this.setState({ time: childdata });
    }
  
    render() {
        return (
            <div>
                <h1>Cild to Parent Component</h1>
                <h2>{this.state.time}</h2>
                <CtopChild parentCallback={this.func1} />
            </div>
        );
    }

}

export default CtopParent;