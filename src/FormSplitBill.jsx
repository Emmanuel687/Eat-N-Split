import React, { useState } from "react";
import "./index.css";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidbyFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  return (
    <>
      <form className="form-split-bill">
        <h2>Split the bill with {selectedFriend.name}</h2>

        <label>💰 Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />

        <label>🤺 Your Expense</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              +e.target.value > bill ? paidByUser : +e.target.value
            )
          }
        />

        <label>🤼 {selectedFriend.name} expense 💰</label>
        <input type="text" value={paidbyFriend} disabled />

        <label>🤑 Who is paying the bill </label>
        <select
          onChange={(e) => setWhoIsPaying(e.target.value)}
          value={whoIsPaying}
        >
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>

        <Button>Add</Button>
      </form>
    </>
  );
};

export default FormSplitBill;
