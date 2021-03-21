import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { SearchBoxComponent } from "./components/search-box/search-box.component";

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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <ThemeToggleComponent />
        <SearchBoxComponent
          placeholder="Search Monsters..."
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
