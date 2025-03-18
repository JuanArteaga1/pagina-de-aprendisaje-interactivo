import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Appmovil = () => {
  const [loggedIn] = useState(true); 

  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <div className="ban">
        <img src="/img/970x250.jpg" alt="Bienvenida" />
      </div>
      <p>Aquí estarán todas las aplicaciones.</p>
    </div>
  );
};

export default Appmovil;
