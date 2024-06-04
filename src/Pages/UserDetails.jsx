import React from "react";
import { useParams } from "react-router-dom";

const userDetailsData = {
  1: {
    name: "Alice Smith",
    username: "alice",
    email: "alice@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  2: {
    name: "Bob Johnson",
    username: "bob",
    email: "bob@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  3: {
    name: "Charlie Brown",
    username: "charlie",
    email: "charlie@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  4: {
    name: "Diana Prince",
    username: "diana",
    email: "diana@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  5: {
    name: "Eve Adams",
    username: "eve",
    email: "eve@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  6: {
    name: "Frank Miller",
    username: "frank",
    email: "frank@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  7: {
    name: "Grace Lee",
    username: "grace",
    email: "grace@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  8: {
    name: "Hank Hill",
    username: "hank",
    email: "hank@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  9: {
    name: "Ivy Green",
    username: "ivy",
    email: "ivy@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  10: {
    name: "Jack White",
    username: "jack",
    email: "jack@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  11: {
    name: "Karen Black",
    username: "karen",
    email: "karen@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  12: {
    name: "Larry King",
    username: "larry",
    email: "larry@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  13: {
    name: "Mona Lisa",
    username: "mona",
    email: "mona@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  14: {
    name: "Nina Simone",
    username: "nina",
    email: "nina@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  15: {
    name: "Oscar Wilde",
    username: "oscar",
    email: "oscar@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  16: {
    name: "Paul Walker",
    username: "paul",
    email: "paul@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  17: {
    name: "Quincy Jones",
    username: "quincy",
    email: "quincy@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  18: {
    name: "Rachel Green",
    username: "rachel",
    email: "rachel@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  19: {
    name: "Steve Rogers",
    username: "steve",
    email: "steve@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
  20: {
    name: "Tony Stark",
    username: "tony",
    email: "tony@gmail.com",
    role: "User",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    description: "",
    availableBalance: 0,
  },
};

const UserDetails = () => {
  const { id } = useParams();
  const user = userDetailsData[id];

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-3 font-medium">User Detail: {user.name}</h2>
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
              <th className="py-2 px-4 border">Role</th>
              <td className="py-2 px-4 border">{user.role}</td>
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
              <td className="py-2 px-4 border">{user.bio}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Description</th>
              <td className="py-2 px-4 border">{user.description}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Available Balance</th>
              <td className="py-2 px-4 border">{user.availableBalance}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
