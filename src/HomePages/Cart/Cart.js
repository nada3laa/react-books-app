import React, { useContext } from 'react'

import cartContext from '../../context/cartContext';
import OrderSummary from './OrderSummary';
import CartItem from './CartItem';

 function Cart() {
  const {cartItems, addToCart,removeFromCart } = useContext(cartContext)
  const totalPrice =  cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2);
  return (
    <div className="cart">
    <h1 className="cart-title">Your Shopping Cart</h1>
    <div className="cart-wrapper">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} removeFromCart={removeFromCart} addToCart= {addToCart} item={item}/>
        ))}
      </div>
    <OrderSummary totalPrice={totalPrice}/>
    </div>
  </div>
  )
}
export default Cart