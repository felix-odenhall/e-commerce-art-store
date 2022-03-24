import '../components/ProductCard/_ProductCard.scss';
import Navbar from '../components/Navbar/Navbar';
import * as config from '../Config';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const [fetchedProduct, setFetchedProduct] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetch(`${config.API_BASE_URL}/products/product/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setFetchedProduct(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return fetchedProduct ? (
    <>
      <Navbar />

      <img src={fetchedProduct.image} alt="" />
      <h3>{fetchedProduct.title}</h3>
      <div className="btn-container">
        <button>Add to cart</button>
        <button>Buy</button>
      </div>
      {/* <section className="container">
        <ProductCard
          key={product._id}
          _id={product._id}
          title={product.title}
          image={product.image}
          type={product.type}
        />
      </section> */}
    </>
  ) : (
    <h1>Loading... </h1>
  );
};

export default Product;
