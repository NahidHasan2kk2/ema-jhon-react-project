import React, { useState } from 'react';
import Summery from '../Summery/Summery';
import { Link, useLoaderData } from 'react-router-dom';
import './Orders.css';
import Review from '../Review/Review';
import { deleteShoppingCart, removeFromDb } from '../../utitlitice/fackdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(products);
    // console.log(products);
    const handleRemoveItem = (id) => {
        const savedCart = cart.filter(ct => ct.id !== id)
        setCart(savedCart);
        removeFromDb(id);

    }
    const deleteSavedCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <Review
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}

                    ></Review>)
                }

            </div>
            <div className='cart-container'>
                <Summery
                    carts={cart}
                    deleteSavedCart={deleteSavedCart}
                >
                    <Link to="/checkout"><button className='checkout-btn'>

                        <span style={{ marginRight: '50px' }}> Proceed Checkout</span>
                        <FontAwesomeIcon icon={faCheckSquare} />
                    </button></Link>
                </Summery>
            </div>

        </div>
    );
};

export default Orders;