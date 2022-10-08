import React from 'react'
import { useNavigate } from 'react-router-dom'

function ThankYou() {
    const navigate=useNavigate();
  return (
    <div>
        <h2>ThankYou for Shopping....</h2> 
<button onClick={()=>navigate('/')}>Continue Shopping</button>
    </div>
  )
}

export default ThankYou 