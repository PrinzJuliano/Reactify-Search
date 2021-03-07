import "./App.css";
import React from "react";
import { Tile } from "carbon-components-react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sprongText: "Here is some text to change!",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <Tile className="dark:bg-green-800">
          {this.state.monsters.map((element) => (
            <h1
              key={element.id}
              className="font-sans text-2xl font-bold bg-white text-black dark:text-white dark:bg-transparent"
            >
              {element.name}
            </h1>
          ))}
        </Tile>
      </div>
    );
  }
}

export default App;
