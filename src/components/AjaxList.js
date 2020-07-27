import React, { useState, useEffect } from "react";
import { ajax } from "rxjs/ajax";
import { map, tap } from "rxjs/operators";

import List from "./List";

const getName = (user) => `${user.name.first} ${user.name.last}`;

const names$ = ajax.getJSON("https://randomuser.me/api?results=5&nat=us").pipe(
  tap((item) => console.log(item)),
  map(({ results: users }) => users.map(getName))
);

const UserList = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const subscription = names$.subscribe(setNames);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <h3>Ajax List</h3>
      <List items={names} />
    </>
  );
};

export default UserList;
