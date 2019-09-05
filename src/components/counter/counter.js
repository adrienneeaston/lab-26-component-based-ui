import React from "react";
import "./counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = element => {
    element.preventDefault();
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  decrement = element => {
    element.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div id="counter">
        <button onClick={this.decrement}>-</button>
        <span>count: {this.state.counter}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
