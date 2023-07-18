import React from "react";
import "./index.css";
import Button from "./Button";

const FormSplitBill = () => {
  return (
    <>
      <form className="form-split-bill">
        <h2>Split the bill with X</h2>

        <label>💰 Bill Value</label>
        <input type="text" />

        <label>🤺 Your Expense</label>
        <input type="text" />

        <label>🤼 X's expense 💰</label>
        <input type="text" disabled />

        <label>🤑 Who is paying the bill </label>
        <select>
            <option value='user'>You</option>
            <option value='friend'>X</option>
        </select>

        <Button>Add</Button>
      </form>
    </>
  );
};

export default FormSplitBill;
