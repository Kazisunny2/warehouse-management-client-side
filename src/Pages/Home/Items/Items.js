import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://nameless-wave-22117.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h1 id="item" className="text-primary text-center mt-5">
        Our Items
        <br />
        <button className="text-center mt-5 ">
          <Link to="/manageinventories">Manage Inventories</Link>
        </button>
      </h1>

      <div className="row">
        {items.slice(0, 6).map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}

        <button className="w-50 text-center mx-auto">
          <Link to="/additem">Add New Item</Link>
        </button>
      </div>
    </div>
  );
};

export default Items;
