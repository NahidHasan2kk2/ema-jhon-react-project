import React from 'react';
import './Summery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Summery = ({ carts, deleteSavedCart, children }) => {
    // console.log(carts);
    let totalPrice = 0;
    let totalShippingCharge = 0;
    let quantity = 0;
    for (const cart of carts) {
        // console.log(cart);
        // if (cart.quantity) {
        //     cart.quantity = 1
        // }
        cart.quantity = cart.quantity || 1;
        totalPrice = totalPrice + cart.price * cart.quantity;
        totalShippingCharge = totalShippingCharge + cart.shipping * cart.quantity;
        quantity = quantity + cart.quantity;
    }
    const tex = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShippingCharge + tex;


    return (
        <div className='summery-content'>
            <h1 className='order-summery'>Orders Summery</h1>
            <div className='summery-info'>
                <h3>Select items: {quantity} </h3>
                <h3>Total Price: ${totalPrice}</h3>
                <h3>Total Shipping Charge: ${totalShippingCharge}</h3>
                <h3>Tex:  ${tex.toFixed(2)}</h3>
                <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
                <button onClick={deleteSavedCart} className='clear-cart-btn'>
                    <span style={{ marginRight: '100px' }}>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                {children}
            </div>

        </div>
    );
};

export default Summery;