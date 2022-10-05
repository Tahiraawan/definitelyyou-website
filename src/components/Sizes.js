import React from 'react'

function Sizes(props) {
  return (
    <div className='sizes'>
    
      {props.size.map((size, index) => {
        return <div key={index} className="size">{size}</div>;
      })}

    </div>
  )
}

export default Sizes