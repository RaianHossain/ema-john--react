import React, { useState } from 'react';
import fakedata from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {

    const first10 = fakedata.slice(0,10)
    const [products, setProducts] = useState(first10) 
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        console.log("Product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Products products = {pd} handleAddProduct = {handleAddProduct}></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;