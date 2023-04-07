import React from 'react';
import Summery from '../Summery/Summery';
import { useLoaderData } from 'react-router-dom';
import './Orders.css';
import Review from '../Review/Review';

const Orders = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    products.map(product => <Review
                        key={product.id}
                        product={product}

                    ></Review>)
                }

            </div>
            <div className='cart-container'>
                <Summery
                    carts={products}
                ></Summery>
            </div>

        </div>
    );
};

export default Orders;