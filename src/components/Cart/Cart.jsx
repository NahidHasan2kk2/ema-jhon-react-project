import React from 'react';
import './Cart.css';

const Cart = ({ product }) => {
    const { name, price, img, ratings, seller } = product;
    console.log(product);
    return (
        <div className='product-content'>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufecture By: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button>
                Add To Cart

            </button>


        </div>
    );
};

export default Cart;