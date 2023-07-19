import React from "react";
import "./index.css";
import Friend from "./Friend";

const FriendList = ({ friends , onSelection, selectedFriend}) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend} />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
