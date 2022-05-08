import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
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
      <h2>Please add a item</h2>
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
      <ToastContainer />
    </div>
  );
};

export default AddItem;
