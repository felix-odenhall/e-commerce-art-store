import './_App.scss';

import Header from './components/Header/Header';
// import Button from './components/Button/Button';

import { Home, Product, About, Checkout } from './pages';
// import { Home, Product, About, Cart, Checkout } from './pages';

import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';

const App = () => {
  const [fetchedProduct, setFetchedProduct] = useState('');

  const getCartLs = JSON.parse(localStorage.getItem('cart')) || [];
  const [cartItem, setCartItems] = useState(getCartLs);

  const onUpdateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  useEffect(() => {
    console.log(cartItem);
    localStorage.setItem('cart', JSON.stringify(cartItem));
    console.log(localStorage.getItem('cart'));
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

  return (
    <div className="App">
      <Header
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItem={cartItem}
        setCartItems={setCartItems}
        onUpdateCart={onUpdateCart}
        getCartLs={getCartLs}
        emptyCart={emptyCart}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={
            <Product
              fetchedProduct={fetchedProduct}
              setFetchedProduct={setFetchedProduct}
              cartItem={cartItem}
              addToCart={addToCart}
              setCartItems={setCartItems}
              onUpdateCart={onUpdateCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="*" element="404 Page" /> */}
      </Routes>
    </div>
  );
};

export default App;
