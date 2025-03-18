import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Investigaciones = () => {
  const [loggedIn] = useState(true); 

  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <p>¿Investigaciones?</p>
    </div>
  );
};

export default Investigaciones;
