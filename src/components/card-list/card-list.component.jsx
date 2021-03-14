import React from "react";
import "./card-list.component.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list flex flex-wrap overflow-hidden">
      {props.monsters.map((monster) => (
        <div
          className="w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4"
          key={monster.id}
        >
          <Card monster={monster} />
        </div>
      ))}
    </div>
  );
};
