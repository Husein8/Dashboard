import React from "react";
import StatusData from "./StatusData";
import NewUsersData from "./NewUsersData";

function NewUsers() {
  return (
    <div className="px-0 md:px-10">
      <StatusData />
      <NewUsersData />
    </div>
  );
}

export default NewUsers;