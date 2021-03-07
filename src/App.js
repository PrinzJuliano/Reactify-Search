import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sprongText: "Here is some text to change!",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.sprongText}</p>
          <button onClick={() => this.setState({ sprongText: "IT CHANGED!" })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
