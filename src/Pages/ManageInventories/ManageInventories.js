import React, { useEffect, useState } from "react";
import Item from "../Home/Item/Item";

const ManageInventories = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://nameless-wave-22117.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
      <h2>Manage Your Items</h2>
      <div>
        {" "}
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
