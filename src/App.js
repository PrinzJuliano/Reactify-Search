import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";

// import { Search } from "carbon-components-react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
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
        <ThemeToggleComponent />
        <input
          type="search"
          className=""
          placeholder="search monsters"
          onChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        />
        {/*<Search id="search-1" placeholder="search monsters" />*/}
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
