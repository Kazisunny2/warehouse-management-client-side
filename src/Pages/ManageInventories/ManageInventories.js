import React, { useEffect, useState } from "react";
import Item from "../Home/Item/Item";

const ManageInventories = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
      <h2>Manage Your Items</h2>
      {items.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

export default ManageInventories;
