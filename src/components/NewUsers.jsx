import React from "react";
import StatusData from "./StatusData";
import NewUsersData from "./NewUsersData";

function NewUsers() {
  return (
    <div className="px-0 md:pl-6 px-5">
      <StatusData />
      <NewUsersData />
    </div>
  );
}

export default NewUsers;
