import React from "react";

interface ISearchBoxProps {
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ onSearchChange }: ISearchBoxProps) => (
  <div className="pa2">
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="text"
      aria-label="Search Robots"
      placeholder="search robots"
      onChange={onSearchChange}
    />
  </div>
);

export default SearchBox;
