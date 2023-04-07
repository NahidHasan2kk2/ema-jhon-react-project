import { getShoppingCart } from "./fackdb";

const loaderData = async () => {
    const Loadproducts = await fetch('products.json');
    const products = await Loadproducts.json();
    const storedCart = getShoppingCart();
    const addedCart = [];
    for (const id in storedCart) {
        const savedCart = products.find(product => product.id === id)
        if (storedCart) {
            const quantity = storedCart[id];
            savedCart.quantity = quantity;
            addedCart.push(savedCart);
        }
    }
    return addedCart;



}
export default loaderData;