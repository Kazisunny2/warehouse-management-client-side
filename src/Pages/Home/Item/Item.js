import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, name, img, description, price, supplier, quantity } = item;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="m-4 card" style={{ width: "18rem" }}>
        <img
          src={img}
          className="w-100 card-img-top"
          style={{ height: "20rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Price:${price}</p>
          <p className="card-text">
            <small>Description: {description}</small>
          </p>
          <p>Quantity:{quantity}</p>
          <p>Supplier:{supplier}</p>
          <button
            onClick={() => navigateToServiceDetail(_id)}
            className="btn btn-primary "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
