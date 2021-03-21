import React from "react";

import "./search-box.component.css";

export const SearchBoxComponent = ({ placeholder, onChange }) => (
  <input
    className="search-box dark:bg-gray-700 dark:text-white"
    type="search"
    placeholder={placeholder}
    onChange={onChange}
  />
);
