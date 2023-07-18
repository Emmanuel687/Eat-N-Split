import React from "react";
import "./index.css"
import Friend from "./Friend";

const FriendList = ({initialFriends}) => {
  const friends = initialFriends;
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}  />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
