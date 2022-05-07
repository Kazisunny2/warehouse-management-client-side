import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, name, img, description, price, quantity, supplier } = item;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{name}</td>
            <td>
              <img
                src={img}
                className=" w-10 card-img-top"
                style={{ width: "5rem" }}
                alt="..."
              />
            </td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td>
              <button
                onClick={() => navigateToServiceDetail(_id)}
                className="btn btn-primary "
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Item;
