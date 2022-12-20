import React from 'react';
import "./Card.css";

const Card = ({product}) => {
    return (
        <div>
            <div className='card'>
                <img src={product.img} alt="" />
                <h4>{product.name}</h4>
                <p>{product.price} Taka</p>
                <button>Add To Card</button>
            </div>
        </div>
    );
};

export default Card;