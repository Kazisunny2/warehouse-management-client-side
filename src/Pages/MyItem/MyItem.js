import React, { useEffect, useState } from "react";
import axios from "axios";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Item from "../Home/Item/Item";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/myitem?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
      const myItem = items.filter((item) => item.email === user.email);
      setItems(myItem);
    };
    getItems();
  }, []);
  return (
    <div>
      <h2>My items: {items.length}</h2>
      <div className="row">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
