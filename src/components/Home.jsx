import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <Link className="underline" to="/signup">
        signup
      </Link>
      <h1 className="text-3xl font-bolds">This is home</h1>
    </div>
  );
};

export default Home;
