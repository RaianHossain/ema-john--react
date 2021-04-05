import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Products = (props) => {
    const {name, img, price, seller,stock} = props.products
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br/>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} is left- Order Soon</p>
                <button className="addtocartbtn" onClick={() => props.handleAddProduct(props.products)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Products;