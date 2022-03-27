// const Cart = ({ addToCart, removeFromCart, cartItems }) => {
//   const totalPrice = cartItems.reduce((a, b) => a + b.price * b.amount, 0);
//   return (
//     <div>
//       <h2>Cart Items</h2>
//       <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
//       {cartItems.map((item) => (
//         <div key={item._id}>
//           <div>{item.title}</div>
//           <div>
//             <button onClick={() => addToCart(item)}>+</button>
//             <button onClick={() => removeFromCart(item)}>-</button>
//           </div>
//           <div>
//             {item.amount} x {item.price}
//           </div>
//           <div>Total price ${totalPrice}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;

import CartComponent from '../components/CartComponent/CartComponent';
import Navbar from '../components/Navbar/Navbar';
import { useEffect, useState } from 'react';

const Cart = () => {
  const [fetchedProduct, setFetchedProduct] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (fetchedProduct) => {
    const exists = cartItems.find((x) => x.id === fetchedProduct.id);
    if (exists) {
      setCartItems(
        cartItems.map((x) =>
          x.id === fetchedProduct.id
            ? { ...exists, amount: exists.amount + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...fetchedProduct, amount: 1 }]);
    }
  };
  const removeFromCart = (fetchedProduct) => {
    const exists = cartItems.find((x) => x.id === fetchedProduct.id);
    if (exists.amount === 1) {
      setCartItems(cartItems.filter((x) => x.id !== fetchedProduct.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === fetchedProduct.id
            ? { ...exists, amount: exists.amount - 1 }
            : x
        )
      );
    }
  };
  return (
    <div>
      <Navbar />
      <CartComponent
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
    </div>
  );
};

export default Cart;
