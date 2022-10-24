import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();
  return (
  <div className="container">
       <div className="thankyou">
      <h2>ThankYou for Shopping....</h2>
      <button onClick={() => navigate("/")}>Continue Shopping</button>
    </div>
  </div>
  
  );
}

export default ThankYou;
