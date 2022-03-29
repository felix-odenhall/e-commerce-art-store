import * as config from '../Config';
import { useState, useEffect } from 'react';

const Checkout = ({ emptyCart, onUpdateCart }) => {
  const getCartLs = JSON.parse(localStorage.getItem('cart')) || [];

  const databody = getCartLs.map((product) => {
    return {
      productid: product._id,
      productamount: product.amount,
      producttitle: product.title,
    };
  });

  const [confirmOrder, setConfirmOrder] = useState(false);

  const sendOrder = () => {
    fetch(`${config.API_BASE_URL}/orders`, {
      method: 'POST',
      body: JSON.stringify({ products: databody }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        emptyCart();
        onUpdateCart([]);
        setConfirmOrder(!confirmOrder);
        setTimeout(() => {
          window.location.href = '/';
        }, 4000);
      });
  };
  return confirmOrder ? (
    <h1>Thank you and fuck off!</h1>
  ) : (
    <div>
      <div>
        {getCartLs.map((product, i) => {
          return (
            <h1 key={i}>
              {product.title} x {product.amount}
            </h1>
          );
        })}
      </div>
      <button onClick={sendOrder}>Confirm</button>
    </div>
  );
};

export default Checkout;
