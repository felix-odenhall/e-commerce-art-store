import '../components/ProductCard/_ProductCard.scss';
import Navbar from '../components/Navbar/Navbar';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ products }) => {
  const { id } = useParams();
  const product = products.filter((product) => product._id === id);
  return (
    <>
      <Navbar />
      <img src={product[0].image} alt="" />
      <h3>{product[0].title}</h3>
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
  );
};

export default Product;
