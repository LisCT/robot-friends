import React from "react";
import Card from "./Card";
import { IRobot } from "../types/initials";

const CardList = ({ robots }: { robots: Array<IRobot> }) => (
  <div>
    {robots.map((robot, i) => (
      <Card
        key={robots[i].id}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    ))}
  </div>
);

export default CardList;
