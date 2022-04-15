import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../../../App';
import useServices from '../../../hooks/useServices';

 
const Cart = (props) => {
    const {cart, addToCart, removeToCart} = props;
   
  const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside className='block col-1'>
            <h3>Cart Items</h3>
        
        <div>
           {cart.length === 0 && <div> Cart is empty </div>}
        </div>
        { cart.map((item) => (
            <div key={item.id} className='row'>
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                    <button onClick={() => addToCart(item )} className = "add" >+</button>
                    <button onClick={() => removeToCart(item )} className = "remove" >-</button>
                </div>
                <div className='col-2 text-right'>
                    {item.qty} x ${itemsPrice.toFixed(2)}
                </div>
            </div>
        ))}
        </aside>
    );
};

export default Cart;