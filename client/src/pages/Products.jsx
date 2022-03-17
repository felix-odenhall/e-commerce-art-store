import ProductCard from '../components/ProductCard/ProductCard';

const Products = (products) => {
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
};

export default Products;
