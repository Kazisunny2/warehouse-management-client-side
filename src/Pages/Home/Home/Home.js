import React from "react";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import Photos from "../Photos/Photos";

const Home = () => {
  return (
    <div>
      <h1 className="text-primary text-center mt-2">
        Welcome To My Warehouse Inventory Management Website
      </h1>
      <Banner></Banner>
      <Items></Items>
      <Photos></Photos>
    </div>
  );
};

export default Home;
