import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Review = ({ product, handleRemoveItem }) => {
    const { name, price, quantity, img } = product;

    return (
        <div className='review-content'>
            <div className='review-items'>
                <div className='review-img'>
                    <img src={img} alt="" />
                </div>
                <div className='review-info'>
                    <h3>{name}</h3>
                    <p>Price: {price}</p>
                    <h5>Quantity : {quantity}</h5>
                </div>
            </div>
            <div >
                <button onClick={() => handleRemoveItem(product.id)} className='delete-btn'>
                    <FontAwesomeIcon className='delete-font' icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default Review;