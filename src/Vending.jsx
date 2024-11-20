import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Vending() {
  return (
    <>
      <p> Vending Machine</p>
      <hr />
      <button>
        <Link to="/candy">Get Candy</Link>
      </button>
      <br />
      <button>
        <Link to="/chips">Get Chips</Link>
      </button>
      <br />
      <button>
        <Link to="/coke">Get Coke</Link>
      </button>
    </>
  );
}

export default Vending;
