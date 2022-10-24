import React from "react";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const navigate = useNavigate();
  const handleLogin = async(e) => {
    e.preventDefault();
    navigate('/thankyou')
  }
  return (
 <div>
     <form action="" onSubmit={handleLogin}>
      <div>
        <h2>Checkout:</h2>
      </div>
      <div className="input-container">
      <div className="heading">
          <h3>Customer Info</h3>
        </div>
        <div className="customer-info">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="xyz@gmail.com" required />
        </div>
     
      </div>
      <div className="input-container">
        <div className="heading">
          <h3>Address Details</h3>
        </div>
        <div className="address">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Street No"  required/>
          <input type="text" placeholder="House No" required />
          <input type="number" placeholder="Zip/Postal" required />
        </div>
      </div>
      <div  className="payment-method">
        <div className="heading">
          <h3>Payment Method</h3>
        </div>

        <div className="payment-radio">
          <input type="radio" id="cash" name="payment-method" value="Cash" /> 
          <label htmlFor="cash">Cash</label>
           {" "}
          <input
            type="radio"
            id="credit"
            name="payment-method"
            value="Credit"
          />
           <label htmlFor="credit">Credit</label>
        </div>
      </div>
      <button type="submit" >Submit</button>
    </form>
 </div>
  );
}

export default CheckOut;
