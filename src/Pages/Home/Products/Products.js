import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import Card from '../Card/Card';
import "./Products.css";

const Products = () => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        fetch("products.json")
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setProducts(data)
        })
    },[])

    return (
      <div>
        {loading ? (
          <div className='loader'>
            <BeatLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="products">
            {products.map((product, i) => (
              <Card key={i} product={product}></Card>
            ))}
          </div>
        )}
      </div>
    );
};

export default Products;