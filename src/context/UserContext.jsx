import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

const userDetailsData = {
  1: {
    name: "Alice Smith",
    username: "alice",
    email: "alice@gmail.com",
    status: "Active",
    isVerified: true,
    country: "United States of America",
    state: "California",
    city: "Los Angeles",
    phoneNumber: 12345678,
    bio: "Hello! I'm Alice.",
    availableCoin: 100,
    lastActive: "12/06/2024 10:35 AM",
    createdDate: "01/01/2024 9:00 AM",
    image: "/path/to/image1.png",
    loginMode: "email",
    deviceType: "iOS",
    deviceModel: "iPhone 12",
    loggedAt: "12/06/2024 10:35 AM",
    loginIp: "192.168.0.1",
    posts: [
      {
        id: 1,
        title: "Alice's Post 1",
        image: "/path/to/image1.png",
        totalViews: 10,
        totalLikes: 5,
        popularPoints: 15,
        totalComments: 3,
        status: "Active",
        createdAt: "12/06/2024 9:44 AM",
        comments: [
          {
            user: "bob",
            createdAt: "12/06/2024 10:00 AM",
            comment: "Great post!",
          },
          {
            user: "charlie",
            createdAt: "12/06/2024 10:05 AM",
            comment: "Nice picture!",
          },
        ],
      },
      {
        id: 2,
        title: "Alice's Post 2",
        image: "/path/to/image2.png",
        totalViews: 15,
        totalLikes: 8,
        popularPoints: 23,
        totalComments: 4,
        status: "Active",
        createdAt: "12/06/2024 10:00 AM",
        comments: [
          {
            user: "bob",
            createdAt: "12/06/2024 10:10 AM",
            comment: "Looks amazing!",
          },
        ],
      },
    ],
    viewFollowing: ["bob", "charlie"],
    viewFollowers: ["eve", "diana"],
    blockedUsers: ["diana"],
    stories: [
      {
        id: 1,
        type: "Image",
        description: "Alice's first story",
        backgroundColor: "#FFFFFF",
        thumbnail: "/path/to/thumbnail1.png",
        video: "/path/to/video1.mp4",
        status: "Expired",
      },
      {
        id: 2,
        type: "Video",
        description: "Alice's second story",
        backgroundColor: "#000000",
        thumbnail: "/path/to/thumbnail2.png",
        video: "/path/to/video2.mp4",
        status: "Active",
      },
    ],
    userLive: [
      {
        id: 1,
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        totalTime: "1 hour",
        action: "",
      },
    ],
    userReels: [
      {
        id: 1,
        title: "Alice's Reel 1",
        totalViews: 100,
        totalLikes: 50,
        totalComments: 10,
        totalShares: 5,
        status: "Active",
        action: "View",
      },
      {
        id: 2,
        title: "Alice's Reel 2",
        totalViews: 200,
        totalLikes: 100,
        totalComments: 20,
        totalShares: 10,
        status: "Active",
        action: "View",
      },
    ],
  },
  2: {
    name: "Bob Johnson",
    username: "bob",
    email: "bob@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "New York",
    city: "New York City",
    phoneNumber: 87654321,
    bio: "Bob here!",
    availableCoin: 50,
    lastActive: "11/06/2024 10:35 AM",
    createdDate: "02/02/2024 8:00 AM",
    image: "/path/to/image2.png",
    loginMode: "social",
    deviceType: "Android",
    deviceModel: "Samsung Galaxy S21",
    loggedAt: "11/06/2024 10:35 AM",
    loginIp: "192.168.0.2",
    posts: [
      {
        id: 1,
        title: "Bob's Post 1",
        image: "/path/to/image1.png",
        totalViews: 20,
        totalLikes: 10,
        popularPoints: 30,
        totalComments: 5,
        status: "Active",
        createdAt: "11/06/2024 9:44 AM",
        comments: [
          {
            user: "alice",
            createdAt: "11/06/2024 10:00 AM",
            comment: "Nice post!",
          },
        ],
      },
      {
        id: 2,
        title: "Bob's Post 2",
        image: "/path/to/image2.png",
        totalViews: 25,
        totalLikes: 12,
        popularPoints: 37,
        totalComments: 6,
        status: "Active",
        createdAt: "11/06/2024 10:00 AM",
        comments: [
          {
            user: "charlie",
            createdAt: "11/06/2024 10:10 AM",
            comment: "Looks good!",
          },
        ],
      },
    ],
    viewFollowing: ["alice", "charlie"],
    viewFollowers: ["diana", "eve"],
    blockedUsers: ["diana"],
    stories: [
      {
        id: 3,
        type: "Image",
        description: "Bob's first story",
        backgroundColor: "#FFFFFF",
        thumbnail: "/path/to/thumbnail3.png",
        video: "/path/to/video3.mp4",
        status: "Expired",
      },
      {
        id: 4,
        type: "Video",
        description: "Bob's second story",
        backgroundColor: "#000000",
        thumbnail: "/path/to/thumbnail4.png",
        video: "/path/to/video4.mp4",
        status: "Active",
      },
    ],
    userLive: [
      {
        id: 2,
        startTime: "11:00 AM",
        endTime: "12:00 PM",
        totalTime: "1 hour",
        action: "",
      },
    ],
    userReels: [
      {
        id: 3,
        title: "Bob's Reel 1",
        totalViews: 150,
        totalLikes: 75,
        totalComments: 15,
        totalShares: 7,
        status: "Active",
        action: "View",
      },
      {
        id: 4,
        title: "Bob's Reel 2",
        totalViews: 250,
        totalLikes: 125,
        totalComments: 25,
        totalShares: 12,
        status: "Active",
        action: "View",
      },
    ],
  },
  3: {
    name: "Charlie Davis",
    username: "charlie",
    email: "charlie@gmail.com",
    status: "Active",
    isVerified: true,
    country: "United States of America",
    state: "Texas",
    city: "Austin",
    phoneNumber: 23456789,
    bio: "Charlie here.",
    availableCoin: 75,
    lastActive: "10/06/2024 10:35 AM",
    createdDate: "03/03/2024 7:00 AM",
    image: "/path/to/image3.png",
    loginMode: "email",
    deviceType: "iOS",
    deviceModel: "iPhone 11",
    loggedAt: "10/06/2024 10:35 AM",
    loginIp: "192.168.0.3",
    posts: [
      {
        id: 1,
        title: "Charlie's Post 1",
        image: "/path/to/image1.png",
        totalViews: 30,
        totalLikes: 15,
        popularPoints: 45,
        totalComments: 8,
        status: "Active",
        createdAt: "10/06/2024 9:44 AM",
        comments: [
          {
            user: "alice",
            createdAt: "10/06/2024 10:00 AM",
            comment: "Great post!",
          },
          {
            user: "bob",
            createdAt: "10/06/2024 10:05 AM",
            comment: "Nice picture!",
          },
        ],
      },
      {
        id: 2,
        title: "Charlie's Post 2",
        image: "/path/to/image2.png",
        totalViews: 35,
        totalLikes: 18,
        popularPoints: 53,
        totalComments: 9,
        status: "Active",
        createdAt: "10/06/2024 10:00 AM",
        comments: [
          {
            user: "alice",
            createdAt: "10/06/2024 10:10 AM",
            comment: "Looks amazing!",
          },
        ],
      },
    ],
    viewFollowing: ["alice", "bob"],
    viewFollowers: ["eve", "diana"],
    blockedUsers: ["diana"],
    stories: [
      {
        id: 5,
        type: "Image",
        description: "Charlie's first story",
        backgroundColor: "#FFFFFF",
        thumbnail: "/path/to/thumbnail5.png",
        video: "/path/to/video5.mp4",
        status: "Expired",
      },
      {
        id: 6,
        type: "Video",
        description: "Charlie's second story",
        backgroundColor: "#000000",
        thumbnail: "/path/to/thumbnail6.png",
        video: "/path/to/video6.mp4",
        status: "Active",
      },
    ],
    userLive: [
      {
        id: 3,
        startTime: "9:00 AM",
        endTime: "10:00 AM",
        totalTime: "1 hour",
        action: "",
      },
    ],
    userReels: [
      {
        id: 5,
        title: "Charlie's Reel 1",
        totalViews: 200,
        totalLikes: 100,
        totalComments: 20,
        totalShares: 10,
        status: "Active",
        action: "View",
      },
      {
        id: 6,
        title: "Charlie's Reel 2",
        totalViews: 300,
        totalLikes: 150,
        totalComments: 30,
        totalShares: 15,
        status: "Active",
        action: "View",
      },
    ],
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

// Custom hook to use the UserContext
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export { UserContext, UserProvider, useUserContext };
