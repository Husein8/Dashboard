// src/context/UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
