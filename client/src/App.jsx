import './_App.scss';
// import Button from './components/Button/Button';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
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
        console.log(products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <h2>Home</h2>
      <h1>lol</h1>
    </>
  );
}

export default App;
