import Header from "./components/Header/Header";
import CartComponent from "./components/CartComponent/CartComponent";
import { Home, Product, About, Checkout, Admin, Login } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [fetchedProduct, setFetchedProduct] = useState("");

  const getCartLs = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItem, setCartItems] = useState(getCartLs);

  const onUpdateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    console.log(cartItem);
    localStorage.setItem("cart", JSON.stringify(cartItem));
    console.log(localStorage.getItem("cart"));
  }, [cartItem]);

  const addToCart = (fetchedProduct) => {
    const exists = cartItem.find((x) => x._id === fetchedProduct._id);
    console.log(exists);
    if (exists) {
      onUpdateCart(
        cartItem.map((x) =>
          x._id === fetchedProduct._id
            ? { ...exists, amount: exists.amount + 1 }
            : x
        )
      );
    } else {
      onUpdateCart([...cartItem, { ...fetchedProduct, amount: 1 }]);
    }
  };

  const removeFromCart = (fetchedProduct) => {
    const exists = cartItem.find((x) => x._id === fetchedProduct._id);
    if (exists.amount === 1) {
      onUpdateCart(cartItem.filter((x) => x._id !== fetchedProduct._id));
    } else {
      onUpdateCart(
        cartItem.map((x) =>
          x._id === fetchedProduct._id
            ? { ...exists, amount: exists.amount - 1 }
            : x
        )
      );
    }
  };

  const emptyCart = () => {
    onUpdateCart([]);
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Header
        getCartLs={getCartLs}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {isActive && (
        <CartComponent
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          setCartItems={setCartItems}
          onUpdateCart={onUpdateCart}
          getCartLs={getCartLs}
          emptyCart={emptyCart}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/product/:id"
          element={
            <Product
              fetchedProduct={fetchedProduct}
              setFetchedProduct={setFetchedProduct}
              addToCart={addToCart}
              setCartItems={setCartItems}
              setIsActive={setIsActive}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout"
          element={
            <Checkout emptyCart={emptyCart} onUpdateCart={onUpdateCart} />
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
