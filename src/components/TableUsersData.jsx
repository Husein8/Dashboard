import LatestPost from "./LatestPost";
import NewUsers from "./NewUsers";

function TableUsersData() {
  return (
    <div className="flex justify-between mt-20 mb-52">
      <div className="w-full">
        <LatestPost />
      </div>
      <div className="w-3/5">
        <NewUsers />
      </div>
    </div>
  );
}

export default TableUsersData;
