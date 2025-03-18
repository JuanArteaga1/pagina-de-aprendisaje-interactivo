import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Podcast = () => {
  const [loggedIn] = useState(true); // Aquí asumimos que el usuario ya inició sesión

  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <h1>Podcast</h1>
      <p>Aquí estarán los episodios del podcast.</p>
    </div>
  );
};

export default Podcast;
