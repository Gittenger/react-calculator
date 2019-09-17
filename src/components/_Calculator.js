import React from "react";

import Display from "./Display";
import Buttons from "./Buttons";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      lastKey: undefined,
      firstVal: undefined,
      modVal: undefined,
      operator: undefined
    };
  }

  handleClick = e => {
    const target = e.target;

    //get key type
    const keyType = this.getKeyType(target);

    //get result string based on key pressed and current state
    //for setting display state
    const result = this.createResult(target, keyType, this.state);
    this.setState({ display: result });

    //update state for pressed keys based on result string
    this.updateState(target, keyType, result);
    this.updateStyle(target, keyType);
  };

  createResult = (target, keyType, state) => {
    const { lastKey, firstVal, modVal, operator, display } = state;
    const keyText = target.innerText;

    if (keyType === "number") {
      //if display is zero, or operator/equals pressed, replace with number pressed
      //if display is not zero, append number text to display text
      return display === "0" ||
        lastKey === "operator" ||
        lastKey === "calculate"
        ? keyText
        : display + keyText;
    }

    if (keyType === "clear") {
      return "0";
    }

    if (keyType === "decimal") {
      //if display has decimal, don't add one
      if (!display.includes(".")) {
        //if operator/equals, display "0."
        return lastKey === "operator" || lastKey === "calculate"
          ? "0."
          : display + ".";
      } else return display;
    }

    if (keyType === "operator") {
      //if user hits number > operator > number > operator, calculation performed before return/display
      //otherwise display number shown (calculation isn't fully formed yet)
      return firstVal &&
        operator &&
        lastKey !== "operator" &&
        lastKey !== "calculate"
        ? this.calculate(firstVal, operator, display)
        : display;
    }

    if (keyType === "calculate") {
      // if firstValue is defined, run calculation, else just show typed num
      if (firstVal) {
        return lastKey === "calculate" //if equals pressed in a row,
          ? //calculate using mod value from original calculation
            this.calculate(display, operator, modVal)
          : //otherwise calculate normally
            this.calculate(firstVal, operator, display);
      } else return display;
    }
  };

  updateState = (key, keyType, calcVal) => {
    const { firstVal, lastKey, operator, modVal, display } = this.state;

    // removes pressed state before processing what to do with keypress
    Array.from(key.parentNode.children).forEach(k => {
      k.classList.remove("is-depressed");
    });

    if (keyType === "operator") {
      //sets operator state attribute
      this.setState({ operator: key.dataset.action });

      //sets firstVal attribute to calcVal for chaining operations
      //if operations not chained, firstVal will be whatever is displayed as operator is clicked
      const firstValResult =
        firstVal &&
        operator &&
        lastKey !== "operator" &&
        lastKey !== "calculate"
          ? calcVal
          : display;

      this.setState({ firstVal: firstValResult });
    }

    if (keyType === "calculate") {
      //if no modValue set, set it to the last displayed number before calculation
      const modValResult =
        firstVal && lastKey === "calculate" ? modVal : display;

      this.setState({ modVal: modValResult });
    }

    if (keyType === "clear") {
      if (key.innerText === "AC") {
        this.setState({
          firstVal: undefined,
          modVal: undefined,
          lastKey: undefined,
          operator: undefined
        });
      }
    }

    //set prevKey to clicked key before moving on
    this.setState({ lastKey: keyType });
  };

  // checkLength = display => {
  //   if (display.toString().length >= 13) {
  //     return true;
  //   } else return false;
  // };

  calculate = (num1, operator, num2) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operator === "add") return n1 + n2;
    if (operator === "subtract") return n1 - n2;
    if (operator === "multiply") return n1 * n2;
    if (operator === "divide") return n1 / n2;
    if (!operator) return num2;
  };

  getKeyType = key => {
    const action = key.dataset.action;
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      return "operator";
    } else if (action === "decimal") {
      return "decimal";
    } else if (action === "clear") {
      return "clear";
    } else if (action === "calculate") {
      return "calculate";
    } else return "number";
  };

  //calculator style/appearance
  updateStyle = (key, keyType) => {
    if (keyType === "operator") {
      //adds is-depressed state so user knows what operator they pressed
      key.classList.add("is-depressed");
    }
    if (keyType === "clear" && key.innerText !== "AC") {
      key.innerText = "AC";
    }
    if (keyType !== "clear") {
      document.querySelector("[data-action=clear]").innerText = "CE";
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display} />
        <Buttons handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
