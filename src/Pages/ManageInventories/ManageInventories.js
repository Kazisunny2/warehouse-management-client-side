import React from "react";
import useItems from "../../hooks/useItems";

const ManageInventories = () => {
  const [items, setItems] = useItems();

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
    <div className="w-50 mx-auto">
      <h2>Manage Your Items</h2>
      {items.map((item) => (
        <div key={item._id}>
          <h4>
            {item.name}{" "}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ManageInventories;
