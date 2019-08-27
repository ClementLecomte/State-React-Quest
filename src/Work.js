import React, { Component } from 'react';
import logo from "./logo.svg";

class Work extends Component {

constructor(props) {
  super(props);
  this.state = {
    on: false
  };
}

handleClick = () => {
  this.setState({ on: !this.state.on });
};
    render () {
    const isWorking = this.state.on ? 'Yes' : 'No';
    return (
        <div className="Work" >
        <img src={logo} className={isWorking} alt="logo" />
        <p> Do you Work Homer ? </p>
            <button onClick={this.handleClick}  >
                {isWorking.toUpperCase()}
            </button>

        </div>
    );
    }
}
export default Work;