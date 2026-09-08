import React from "react";
import imagenNetsurfer from "../assets/netsurferlp.jpg";

//inicio
const Home = () => {
  document.title = "NetsurferLP | Full Stack - Software Developer";
  return (
    <div>
      <img
        src={imagenNetsurfer}
        className="img-fluid rounded mx-auto d-block   mt-3 "
        alt="..."
      ></img>
    </div>
  );
};

export default Home;
