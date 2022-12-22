import React, { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import "./Card.css";

const Card = ({product}) => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <div className="card">
          <img src={product.img} alt="" />
          <h4>{product.name}</h4>
          <p>{product.price} Taka</p>

          {count > 0 ? (
            <p className="quantity">
              Quantity: <FaPlusCircle onClick={() => setCount(count + 1)} />
              {count}
              <FaMinusCircle onClick={() => setCount(count - 1)} />
            </p>
          ) : (
            <button onClick={() => setCount(count + 1)}>Add To Cart</button>
          )}
        </div>
      </div>
    );
};

export default Card;