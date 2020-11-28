import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {id, title, price, rating, image} = props;
    return (
        <div className="product">
            {/* id, title, price? rating, image */}
            
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill()
                        .map(_=>(
                            <p>&#11088;</p>
                        ))
                    }
                </div>
            </div>
            <img src={image}/>
            <button type="">Add to basket</button>
        </div>
    );
}

export default Product;
