import React from 'react'
import { StarFilled,ShoppingCartOutlined } from "@ant-design/icons";
import Colors from './Colors';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {

    const stars = [];
    for(let i=0; i<props.rating; i++){
        stars.push(i);
    }

    const navigate = useNavigate();
  return (
    <div className='product-card'>
        <div className="card-image">
            <img src={props.imageLink} alt="" />
        </div>
        <div className="card-info">
            <h3>{props.title}</h3>
            <p>Price: <span>{props.price}</span></p>
            <div className="rating">
             {
                stars.map(()=>{
                    return <StarFilled className='star'/>
                } )
             }
             
            </div>
            <div className="color-container">
                <span>Color:</span>
                <Colors color={props.color} />
                {/* <div className="colors">
                    {
                        props.color.map((color, index)=>{
                            return <div key={index} className={`color-${color}`}></div>
                        })
                    }
                </div> */}
            </div>
            <div className="size-container">
                <span>Size:</span>
                <div className="sizes">
                {
                        props.size.map((size, index)=>{
                            return <span key={index} >{size}</span>
                        })
                    }
                </div>
            </div>
            <div className="action-buttons">
                <button onClick={()=>navigate('/productpage')}>View item</button>
                <ShoppingCartOutlined className='cart-icon' />
            </div>
        </div>
    </div>
  )
}

export default ProductCard