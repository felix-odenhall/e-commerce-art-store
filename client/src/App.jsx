import './App.css';
// import Button from './components/Button/Button';
import ProductCard from './components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import * as config from './Config';

// const products = [
//   {
//     id: 'product1',
//     image: 'https://made-up.com/image.jpg',
//     title: 'Product 1',
//     description: 'Product Name 1',
//   },
//   {
//     id: 'product2',
//     image: 'https://made-up.com/image.jpg',
//     title: 'Product 2',
//     description: 'Product Name 2',
//   },
//   {
//     id: 'product3',
//     image: 'https://made-up.com/image.jpg',
//     title: 'Product 3',
//     description: 'Product Name 3',
//   },
//   {
//     id: 'product4',
//     image: 'https://made-up.com/image.jpg',
//     title: 'Product 4',
//     description: 'Product Name 4',
//   },
//   {
//     id: 'product5',
//     image: 'https://made-up.com/image.jpg',
//     title: 'Product 5',
//     description: 'Product Name 5',
//   },
// ];

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
      <section className="container">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            title={product.title}
            image={product.image}
            type={product.type}
          />
        ))}
      </section>
    </>
  );
}

export default App;
