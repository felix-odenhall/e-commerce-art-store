import './_App.scss';
// import Button from './components/Button/Button';

import { Home, Product, About, Cart, Checkout } from './pages';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="*" element="404 Page" /> */}
      </Routes>
    </div>
  );
};

export default App;
