import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Updating Item:{item.name}</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          type="number"
          placeholder="Price"
          {...register("price")}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          type="number"
          placeholder="Quantity"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Supplier"
          {...register("supplier")}
        />
        <input
          className="mb-2"
          type="text"
          placeholder="Photo URL"
          {...register("img")}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default UpdateItem;
