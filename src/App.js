import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList initialFriends={initialFriends} />
        <FormAddFriend />
        <br></br>
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;
