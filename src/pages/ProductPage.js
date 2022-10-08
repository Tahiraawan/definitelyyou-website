import React from 'react'
import { StarFilled, HeartOutlined } from "@ant-design/icons";
import Sizes from '../components/Sizes';
import { products } from './../products';
import Colors from '../components/Colors';
import dress from '../images/dress.webp';
import dress1 from '../images/dress1.webp';
import dress2 from '../images/dress2.webp';

function ProductPage() {
  return (
    <div className='product-page'>
        <h3>Title</h3>
        <HeartOutlined />
        <StarFilled className='star'/>
        <span>4.9</span>

        <div className="product-images-container">
            <div className="main-image">
                <img src={dress} alt="" />
            </div>
            <div className="side-images">
                <img src={dress1} alt="" />
                <img src={dress2} alt="" />
            </div>
        </div>

        <div className="product-details-container">
            <div className="description">
                <div className="overview">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, soluta!</p>
                </div>
                <div className="reviews">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, at?</p>
                    <h3>4.9</h3>
                    <StarFilled />
                    <p>40 ratings</p>
                </div>
            </div>
            <div className="product-details">
                <h4>Select Size</h4>
                <Sizes size={products[1].size} />
                <h4>Select Color</h4>
                <Colors color={products[1].color}/>
            </div>
        </div>
    </div>
  )
}

export default ProductPage