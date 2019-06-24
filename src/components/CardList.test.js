import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

it("renders without crashing", () => {
  const filteredRobots = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    }
  ];

  expect(shallow(<CardList robots={filteredRobots} />)).toMatchSnapshot();
});
