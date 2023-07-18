import React, { useState } from "react";
import "./index.css";
import Button from "./Button";

const FormAddFriend = ({onAddFriend}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?${id}`,
      balance: 0,
    };
    console.log(newFriend);
    onAddFriend(newFriend)
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>🤼 Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>📷Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </>
  );
};

export default FormAddFriend;
