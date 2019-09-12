import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: 0
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ stuff: Math.floor(Math.random() * 20 + 1) });
  };

  render() {
    return (
      <div>
        <h4>{this.state.stuff}</h4>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>
    );
  }
}

export default Counter;
