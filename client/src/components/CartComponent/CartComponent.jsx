import React from 'react';
import { useState, useEffect } from 'react';

const CartComponent = ({
  addToCart,
  removeFromCart,
  fetchedProduct,
  cartItem,
  setCartItems,
  onUpdateCart,
  getCartLs,
  emptyCart,
}) => {
  // const getItem = JSON.parse(localStorage.getItem('cart'));

  const totalPrice = getCartLs.reduce((a, b) => a + b.price * b.amount, 0);
  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(getItem));
  // }, [getItem]);
  return (
    <div>
      <h2>Hello {[getCartLs.title]}</h2>

      <button onClick={() => emptyCart(fetchedProduct)}>Empty Cart</button>
      <h2>Cart Items</h2>
      <div>{getCartLs.length === 0 && <div>Cart is empty</div>}</div>
      {getCartLs.map((item) => (
        <div key={item._id}>
          <div>{item.title}</div>
          <div>
            {item.amount} x {item.price}
          </div>
          <div>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item)}>-</button>
          </div>
        </div>
      ))}
      <div>Total price ${totalPrice}</div>
    </div>
  );
};

export default CartComponent;
