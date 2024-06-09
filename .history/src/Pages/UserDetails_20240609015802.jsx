import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const userDetailsData = {
  1: {
    name: "Alice Smith",
    username: "alice",
    email: "alice@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  2: {
    name: "Bob Johnson",
    username: "bob",
    email: "bob@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  3: {
    name: "Charlie Brown",
    username: "charlie",
    email: "charlie@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  4: {
    name: "Diana Prince",
    username: "diana",
    email: "diana@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  5: {
    name: "Eve Adams",
    username: "eve",
    email: "eve@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",

    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  6: {
    name: "Frank Miller",
    username: "frank",
    email: "frank@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  7: {
    name: "Grace Lee",
    username: "grace",
    email: "grace@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  8: {
    name: "Hank Hill",
    username: "hank",
    email: "hank@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  9: {
    name: "Ivy Green",
    username: "ivy",
    email: "ivy@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  10: {
    name: "Jack White",
    username: "jack",
    email: "jack@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    // loginMode: "social",
    // deviceType: "iOS",
    // deviceModel: "Rosemary’s iPhone",
    // loggedAt: "04/06/2024 10:35 AM",
    // loginIp: "64.44.177.36",
  },
};

const UserDetails = () => {
  const { id } = useParams();
  const user = userDetailsData[id];
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/update/${id}`);
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-3 font-medium">User Detail: {user.name}</h2>
      <div className="mt-4">
        <button
          onClick={handleUpdateClick}
          className="mr-2 bg-buttonsColor text-white px-4 py-2 rounded"
        >
          Update
        </button>
        <button
          // onClick={handleDeleteClick}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <tbody>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <td className="py-2 px-4 border">{user.name}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Username</th>
              <td className="py-2 px-4 border">{user.username}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Email</th>
              <td className="py-2 px-4 border">{user.email}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Status</th>
              <td className="py-2 px-4 border">{user.status}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Is Verified?</th>
              <td className="py-2 px-4 border">
                {user.isVerified ? "Yes" : "No"}
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Country</th>
              <td className="py-2 px-4 border">{user.country}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">State</th>
              <td className="py-2 px-4 border">{user.state}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">City</th>
              <td className="py-2 px-4 border">{user.city}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Is Phone Verified?</th>
              <td className="py-2 px-4 border">
                {user.isPhoneVerified ? "Yes" : "No"}
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Is Email Verified?</th>
              <td className="py-2 px-4 border">
                {user.isEmailVerified ? "Yes" : "No"}
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Bio</th>
              <td className="py-2 px-4 border">
                {user.bio ? user.bio : "not set"}
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Available Coin</th>
              <td className="py-2 px-4 border">{user.availableCoin}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Last Active</th>
              <td className="py-2 px-4 border">{user.lastActive}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Created date</th>
              <td className="py-2 px-4 border">{user.createdDate}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Image</th>
              <td className="py-2 px-4 border">{user.image}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white px-2 pb-2">
        <h2 className="text-xl mb-4 mt-5 font-medium">
          User last login detail
        </h2>
        <div className="overflow-x-auto ">
          {/* check for all of this, if all of this doesnt exist then dont render it 
            // loginMode: "social",
    // deviceType: "iOS",
    // deviceModel: "Rosemary’s iPhone",
    // loggedAt: "04/06/2024 10:35 AM",
    // loginIp: "64.44.177.36",
             */}
          {/* {user.logindMode ? ( */}
          <table className="min-w-full bg-white border border-gray-200">
            <tbody>
              <tr>
                <th className="py-2 px-4 border">Login Mode</th>
                <td className="py-2 px-4 border">{user.loginMode}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Device Type</th>
                <td className="py-2 px-4 border">{user.deviceType}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Device Model</th>
                <td className="py-2 px-4 border">{user.deviceModel}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Logged At</th>
                <td className="py-2 px-4 border">{user.loggedAt}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Login Ip</th>
                <td className="py-2 px-4 border">{user.loginIp}</td>
              </tr>
            </tbody>
          </table>
          {/* ) : (<p>No detail available</p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
