import CartComponent from "../components/CartComponent/CartComponent";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

const Cart = () => {
  const [fetchedProduct, setFetchedProduct] = useState("");
  const getCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = useState(getCart);
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
