import React, { useState, useEffect } from "react";
import { of } from "rxjs";

import List from "./List";

const source = [
  "Tapan Patra",
  "Irshadahmed Jakati",
  "Gowthami Rajendra",
  "Ratikant Sahoo",
  "Mohammed Roshan",
];
const names$ = of(source);

const UserList = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const subscription = names$.subscribe(setNames);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <h3>User List</h3>
      <List items={names} />
    </>
  );
};

export default UserList;
