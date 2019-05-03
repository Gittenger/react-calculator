import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Buttons extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="calculator__buttons">
          <div class="calculator__keys">
            <button class="key--operator" data-action="add">
              +
            </button>
            <button class="key--operator" data-action="subtract">
              -
            </button>
            <button class="key--operator" data-action="multiply">
              x
            </button>
            <button class="key--operator" data-action="divide">
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
            <button class="key--equal" data-action="calculate">
              =
            </button>
          </div>
        </div>
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
    return <div>{this.state.displayNum}</div>;
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <Display />
        <Buttons />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Calculator />, document.getElementById("root"));
