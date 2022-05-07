import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div className="ItemDetail-form">
      <h2 className="text">Welcome to details: {item.name}</h2>
      <form className="text-primary text-center mt-2">
        <input type="name" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <input type="address" placeholder="Your Address" />
        <input type="phone number" placeholder="Phone Number" />
      </form>

      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
