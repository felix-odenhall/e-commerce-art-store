import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/ProductCard/ProductCard';

import { useEffect, useState } from 'react';

const Home = ({ products }) => {
  return (
    <>
      <Navbar />
      <section className="container">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            title={product.title}
            image={product.image}
            type={product.type}
            price={product.price}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
