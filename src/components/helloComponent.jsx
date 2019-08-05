import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="text-center">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h1 className="h3 font-weight-normal">
            Hello <b className="cap">{this.state.value}</b>
          </h1>
          <div className="form-group">
            <label htmlFor="valueAlert" className="sr-only">
              Type your name
            </label>
            <input
              type="text"
              id="valueAlert"
              className="form-control"
              placeholder="Type your name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Alert your name
          </button>
        </form>
      </div>
    );
  }
}

export default Hello;
