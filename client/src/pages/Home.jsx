import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/ProductCard/ProductCard';
import Search from '../components/Search/Search';
import { useEffect, useState } from 'react';
import * as config from '../Config';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/products`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/products/${query}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);
  console.log(products);

  return (
    <>
      <Navbar />
      <Search setQuery={setQuery} />
      <section className="container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              title={product.title}
              image={product.image}
              type={product.type}
              price={product.price}
            />
          ))
        ) : (
          <h1>There are no such thing</h1>
        )}
      </section>
    </>
  );
};

export default Home;
