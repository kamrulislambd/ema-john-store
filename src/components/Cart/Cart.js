import { faArrowRightLong, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shippingCharge = 0;

    for(const product of cart){
        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shippingCharge + parseFloat(tax);

    return (
        <div className='cart'>
            <h1>Order Summery</h1>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shippingCharge}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : ${grandTotal.toFixed(2)}</h3>
            <button className="delete-btn">
                <p>Clear Cart</p>
                <span>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </span>
            </button>
            <button className="review-btn">
                <p>Review Order</p>
                <span>
                    <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                </span>
            </button>
        </div>
    );
};

export default Cart;