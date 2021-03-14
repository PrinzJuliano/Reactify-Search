import React from "react";
import "./card.component.css";

export const Card = (props) => (
  <div className="card-container m-4 flex flex-col bg-white dark:bg-gray-600 p-5 cursor-pointer border-0 dark:border shadow dark:shadow-none dark:border-gray-500 border-solid rounded">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt="Is a monster"
      className="my-1"
    />
    <h2 className="font-sans text-2xl font-bold text-black dark:text-white">
      {props.monster.name}
    </h2>
    <p className="test-black dark:text-white break-all">
      {props.monster.email}
    </p>
  </div>
);
