import LatestPost from "./LatestPost";
import NewUsers from "./NewUsers";

function TableUsersData() {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-20 mb-10 ml-2">
      <div className="lg:w-7/12">
        <LatestPost />
      </div>
      <div className="lg:w-5/12">
        <NewUsers />
      </div>
    </div>
  );
}

export default TableUsersData;
