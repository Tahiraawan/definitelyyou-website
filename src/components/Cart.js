import React from 'react'
import product1 from '../images/product1.jpg';

function Cart() {
  return (
    <div className='cart'>
        <div className="cart-container">
            <div className="cart-left-container">
                <div className="cart-item-container">
                    <div className="product-container">
                        <div className="product-image">
                            <img src={product1} alt="" />
                        </div>
                        <div className="product-info">
                            <h3>Title</h3>
                            <p>Color: white</p>
                            <p>Size: small</p>
                        </div>
                    </div>
                    <div className="price-container">
                        <h3>Price</h3>
                        <p>2300 PKR</p>
                    </div>
                    <div className="quantity-container">
                        <h3>Quantity</h3>
                        <div className="quantity">
                            <button>-</button>
                            <input type="number" placeholder='0' />
                            <button>+</button>
                        </div>
                    </div>
                    <div className="Total">
                        <h3>Total</h3>
                        <p>2000PKR</p>
                    </div>
                </div>

                <div className="note-container">
                    <label htmlFor="note">Note</label>
                    <textarea name="" id="note" placeholder='Write some notes for our team'></textarea>
                </div>
            </div>
            <div className="cart-right-container">
                <div className="cart-total">
                    <h3>Cart Total: <span>1200Pkr</span></h3>
                    
                </div>
                <div className="agree-container">
                        <input type="checkbox" />
                        <label htmlFor="">I agree to the <span>terms and conditions</span></label>
                    </div>

                    <button>Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart