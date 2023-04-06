import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ product, handleAddToCart }) => {
    const { name, price, img, ratings, seller } = product;


    return (
        <div className='product-content'>
            <img src={img} alt="" />
            <div style={{ marginLeft: '10px' }}>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufecture By: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>
                <span style={{ marginRight: '10px' }}> Add To Cart</span>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>


        </div>
    );
};

export default Cart;