import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce( (total, product) => total + product.price , 0)
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className='cart'>
            <h3 className='order-summary'>Order Summary</h3>
            <p className='items-ord'>Items Ordered: {cart.length}</p>
            <br />
            <p><small>Product Price: ${formatNumber(total)}</small></p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tax + VAT: ${tax}</small></p>
            <p className='total-price'>Total Price: ${grandTotal}</p>
            <div className="review">
               <button className='cart-btn'>Review your order</button>
            </div>
        </div>
    );
};

export default Cart;