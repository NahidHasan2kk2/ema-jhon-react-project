import React, { useState } from 'react';
import Summery from '../Summery/Summery';
import { useLoaderData } from 'react-router-dom';
import './Orders.css';
import Review from '../Review/Review';
import { removeFromDb } from '../../utitlitice/fackdb';

const Orders = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(products);
    // console.log(products);
    const handleRemoveItem = (id) => {
        const savedCart = cart.filter(ct => ct.id !== id)
        setCart(savedCart);
        removeFromDb(id);

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

                ></Summery>
            </div>

        </div>
    );
};

export default Orders;