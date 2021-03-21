// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

const mock = () => {
  let storage = {};
  return {
    getItem: (key) => (key in storage ? storage[key] : null),
    setItem: (key, value) => (storage[key] = value || ""),
    removeItem: (key) => delete storage[key],
    clear: () => (storage = {}),
  };
};

Object.defineProperty(window, "localStorage", { value: mock() });
Object.defineProperty(window, "sessionStorage", { value: mock() });
Object.defineProperty(window, "getComputedStyle", {
  value: () => ["-webkit-appearance"],
});

Object.defineProperty(window, "__env", {
  value: { env: { backendUrl: "mocked URl" } },
});

window.localStorage.theme = "dark";
