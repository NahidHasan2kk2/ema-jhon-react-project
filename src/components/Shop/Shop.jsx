import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Shop.css';
import Summery from '../Summery/Summery';
import { addToDb, getShoppingCart } from '../../utitlitice/fackdb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, SetCarts] = useState([]);
    // console.log(carts);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const addedCart = [];

        // console.log(storedCart);
        for (const id in storedCart) {
            const savedCart = products.find(cart => cart.id === id);

            if (savedCart) {
                const quantity = storedCart[id];
                savedCart.quantity = quantity;
                addedCart.push(savedCart);

            }

        }
        SetCarts(addedCart);




    }, [products])


    const handleAddToCart = (product) => {
        const savedCart = [...carts, product];

        addToDb(product.id);
        SetCarts(savedCart);
    }



    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Cart
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Cart>)
                }

            </div>
            <div className='cart-container'>
                <Summery

                    carts={carts}
                ></Summery>
            </div>
        </div>
    );
};

export default Shop;