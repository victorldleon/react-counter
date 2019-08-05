import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="text-center">
        <h1 className="h3 mt-5 font-weight-normal">Counter page</h1>
        <h1>{this.state.count}</h1>
        <div className="counter-container">
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm m-1"
            onClick={this.handleIncrement}
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm m-1"
            onClick={this.handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
