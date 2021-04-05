import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i<cart.length; i++){
        total = total + cart[i].price;        
    }
    const fixedNumber = num => {
        const toFix = Number(num.toFixed(2))
        return toFix
    }

    let shipping = 0;
    
    if(total > 34){
        shipping = 0;
    }
    else if(total > 14){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99
    }

    const tax = total/10;
    const grandTotal = total+shipping+tax;

    return (
        <div>
            <h3>Order Summury</h3>
            <h5>Number of product: {cart.length}</h5>
            <p>Price: {fixedNumber(total)}</p>
            <p><small>Shipping: {shipping}</small></p>
            <p>Tax + Vat: {fixedNumber(tax)}</p>
            <p>Total: {fixedNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;