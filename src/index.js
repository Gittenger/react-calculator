import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.getKeyType = getKeyType.bind(this);
  }

  getKeyType(key) {
    console.log(key);
    // let result = "number";
    // switch (key.dataset.action) {
    //   case "add":
    //   case "subtract":
    //   case "multiply":
    //   case "divide":
    //     result = "operator";
    //     break;
    //   case "decimal":
    //     result = "decimal";
    //     break;
    //   case "clear":
    //     result = "clear";
    //     break;
    //   case "calculate":
    //     result = "calculate";
    //     break;
    //   default:
    //     "number";
    // }

    // return result;
  }

  render() {
    return (
      <div class="container">
        <div
          onClick={key => this.getKeyType(key)}
          className="calculator__buttons"
        >
          <div className="calculator__keys">
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
