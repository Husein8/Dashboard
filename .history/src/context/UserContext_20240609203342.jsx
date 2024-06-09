// UserContext.js
import React, { createContext, useState } from "react";

const UserContext = createContext();

const userDetailsData = {
  1: {
    name: "Alice Smith",
    username: "alice",
    email: "alice@gmail.com",
    availableCoin: 0,
  },
  2: {
    name: "Bob Johnson",
    username: "bob",
    email: "bob@gmail.com",
    availableCoin: 0,
  },
  3: {
    name: "Charlie Brown",
    username: "charlie",
    email: "charlie@gmail.com",
    availableCoin: 0,
  },
  4: {
    name: "Diana Prince",
    username: "diana",
    email: "diana@gmail.com",
    availableCoin: 0,
  },
  5: {
    name: "Eve Adams",
    username: "eve",
    email: "eve@gmail.com",
    availableCoin: 0,
  },
};

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(userDetailsData);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
