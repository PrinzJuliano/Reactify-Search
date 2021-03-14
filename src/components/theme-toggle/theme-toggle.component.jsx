import React from "react";
import { Tile, Toggle } from "carbon-components-react";

export class ThemeToggleComponent extends React.Component {
  constructor(props) {
    super(props);

    let theme;
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      theme = "dark";
    } else {
      theme = "light";
    }

    this.state = { theme };
  }

  componentDidMount() {
    this.applyTheme(this.state.theme);
  }

  render() {
    return (
      <div className="theme-toggle text-left justify-content-start p-2">
        <div className="inline-block">
          <Tile>
            <label className="toggle-label">Switch the theme</label>
            <div className="flex align-bottom">
              <Toggle
                id="toggleThemeButton"
                labelA="☀️"
                labelB="🌙"
                defaultToggled={this.state.theme === "dark"}
                onToggle={(toggle) => this.toggleTheme(toggle)}
              />
            </div>
          </Tile>
        </div>
      </div>
    );
  }

  toggleTheme(toDark) {
    console.group("toggleTheme");
    console.log(toDark);
    console.groupEnd();
    const newTheme = toDark ? "dark" : "light";
    this.applyTheme(newTheme);
    this.setState({
      theme: newTheme,
    });
  }

  applyTheme(newTheme) {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }
}
