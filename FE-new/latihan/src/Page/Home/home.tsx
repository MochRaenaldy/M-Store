import React from "react";
import Headers from "../../components/navbar";
import Product from "../../components/product";

const Home = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <Product />
      </div>
    </>
  );
};

export default Home;