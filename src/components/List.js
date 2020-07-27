import React from "react";

const List = ({ items = [] }) =>
  items.length ? (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ) : (
    "Loading..."
  );

export default List;
