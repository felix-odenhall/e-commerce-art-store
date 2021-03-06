import ProductCard from "../components/ProductCard/ProductCard";
import Search from "../components/Search/Search";
import { useEffect, useState } from "react";
import * as config from "../Config";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    fetch(`${config.API_BASE_URL}/products?title=${query}&category=${category}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category, query]);

  return (
    <main className="flex flex-col">
      <Search
        setQuery={setQuery}
        setCategory={setCategory}
        category={category}
      />
      <section className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h2>{`No matches for: ${query}`}</h2>
        )}
      </section>
    </main>
  );
};

export default Home;
