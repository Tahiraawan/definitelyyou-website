import React from "react";
import { useNavigate } from "react-router-dom";
// import {Link} from 'react-router-dom'

function CheckOut() {
    const navigate=useNavigate();
  return (
    <div className="checkout-form">
      <div className="heading">
        <h2>Checkout:</h2>
      </div>
      <div className="user-detail">
        <p>
          Name <span>Tahira</span>
        </p>
        <p>
          Email <span>tahiramalik689@gmail.com</span>
        </p>
      </div>
      <div className="address-detail">
        <div className="heading">
          <h3>Address Details</h3>
        </div>
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Street No" />
        <input type="text" placeholder="House No" />
        <input type="number" placeholder="Zip/Postal" />
      </div>
      <div className="payment-method">
        <div className="heading">
          <h3>Payment Method</h3>
        </div>

        <div className="payment-radio">
          <input type="radio" id="cash" name="payment-method" value="Cash" /> 
          <label htmlFor="cash">Cash</label>
            <input type="radio" id="credit" name="payment-method" value="Credit" /> 
          <label htmlFor="credit">Credit</label>
        </div>
      </div>
      <button onClick={()=>navigate('/thankyou')}>Submit</button>
    </div>
  );
}

export default CheckOut;
