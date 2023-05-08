import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: <span className='seller'>{seller}</span></small></p>
                <br /><br />
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <br /><br />
                <button className='cart-btn' onClick = {() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faCartShopping} />Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;