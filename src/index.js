import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calculator">
        <Display />
        <Buttons />
      </div>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNum: 0
    };
  }
  render() {
    return <div className="calculator__display">{this.state.displayNum}</div>;
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.currentTarget);
  }

  render() {
    return (
      <div onClick={this.handleClick} className="calculator__keys">
        <button className="key--operator" data-action="add">
          +
        </button>
        <button className="key--operator" data-action="subtract">
          -
        </button>
        <button className="key--operator" data-action="multiply">
          x
        </button>
        <button className="key--operator" data-action="divide">
          %
        </button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>0</button>
        <button data-action="decimal">.</button>
        <button data-action="clear">AC</button>
        <button className="key--equal" data-action="calculate">
          =
        </button>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Container />, document.getElementById("root"));
