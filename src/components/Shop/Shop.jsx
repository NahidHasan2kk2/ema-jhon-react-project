import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Cart
                        key={product.id}
                        product={product}

                    ></Cart>)
                }

            </div>
            <div className='cart-container'>
                <h1>dfsdf</h1>
            </div>
        </div>
    );
};

export default Shop;