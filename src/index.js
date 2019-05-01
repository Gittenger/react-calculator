import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//function component
const Button = props => {
  return (
    <button className="button" onClick={props.onClick}>
      Val
    </button>
  );
};

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    <div>Calculated Value</div>;
  }
}

class Calculator extends React.Component {
  return() {
    <div>
      <Display />
      <Buttons />
    </div>;
  }
}

// ========================================

ReactDOM.render(<Calculator />, document.getElementById("root"));
