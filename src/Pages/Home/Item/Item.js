import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useItems from "../../../hooks/useItems";

const Item = ({ item }) => {
  const [items, setItems] = useItems();
  const { _id, name, img, description, price, supplier, quantity } = item;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="m-4 card" style={{ width: "30rem" }}>
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
          <div className="col-md-5  offset-2 a">
            <Link to={`/update/${item._id}`}>
              <button
                onClick={() => navigateToServiceDetail(_id)}
                className="btn btn-primary "
              >
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-primary "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
