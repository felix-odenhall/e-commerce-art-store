import React from 'react';

const CartComponent = ({ addToCart, removeFromCart, cartItems }) => {
  const totalPrice = cartItems.reduce((a, b) => a + b.price * b.amount, 0);
  return (
    <div>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item._id}>
          <div>{item.title}</div>
          <div>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item)}>-</button>
          </div>
          <div>
            {item.amount} x {item.price}
          </div>
          <div>Total price ${totalPrice}</div>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
