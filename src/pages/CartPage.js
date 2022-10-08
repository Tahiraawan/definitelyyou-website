import React from 'react'
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { products } from './../products';

function CartPage() {

    const products = [
        {
          imageLink: productImage,  
          title: "Fancy Frock",
          price: "1000 PKR",
          rating: 3,
          color: ["orange", "green", "yellow"],
          size: ["XS", "S", "M", "L", "XL"],
        },
        {
            imageLink: productImage, 
          title: "Fancy Frock",
          price: "1000 PKR",
          rating: 3,
          color: ["blue", "green", "yellow"],
          size: ["XS", "S", "M", "L", "XL"],
        },
        {
            imageLink: p1, 
          title: "Fancy Frock",
          price: "1000 PKR",
          rating: 3,
          color: ["orange", "purple", "yellow"],
          size: ["XS", "S", "M", "L", "XL"],
        },
        {
            imageLink: productImage, 
          title: "Fancy Frock",
          price: "1000 PKR",
          rating: 3,
          color: ["orange", "green", "pink"],
          size: ["XS", "S", "M", "L", "XL"],
        },
      ];
      const navigate=useNavigate();

  return (
    <div className='cart'>
        <div className="cart-container">
            <div className="cart-left-container">
                {
                    products.map((product, index)=>{
                        return <CartItem imageLink={product.imageLink} title={product.title} price={product.price} color={product.color} size={product.size} />
                    })
                }

                <div className="note-container">
                    <label htmlFor="note">Note</label>
                    <textarea name="" id="note" placeholder='Write some notes for our team'></textarea>
                </div>
            </div>
            <div className="cart-right-container">
                <div className="cart-total">
                    <h3>Cart Total:</h3>
                     <span>1200Pkr</span>
                    
                </div>
                <div className="agree-container">
                        <input type="checkbox" />
                        <label htmlFor="">I agree to the <span>terms and conditions</span></label>
                    </div>

                    <button className='checkout-btn' onClick={()=>navigate('/checkout')}>Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CartPage