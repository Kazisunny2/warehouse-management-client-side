import React, { useEffect, useState } from "react";
import Item from "../Home/Item/Item";

const MyItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
      <h2>My Items</h2>
      <div>
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
