import './_App.scss';
// import Button from './components/Button/Button';

import { Home, Products, About } from './pages';

import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import * as config from './Config';

function App() {
  const [products, setItems] = useState([]);
  useEffect(() => {
    fetch(`${config.API_BASE_URL}/products`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setItems(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element="404 Page" /> */}
      </Routes>
    </div>
  );
}

export default App;
