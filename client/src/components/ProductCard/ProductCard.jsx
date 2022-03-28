import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ _id, image, title, type, price }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/checkout');
  };
  return (
    <>
      <div className="card-container">
        <Link to={`/product/${_id}`}>
          <img
            className="product-img"
            src={image}
            alt={`A picture of ${title}`}
          />
        </Link>
        <Link to={`/product/${_id}`}>
          <h3>{title ? title : 'Coming soon'}</h3>
        </Link>
        <p>{type ? type : ''}</p>
        <p>${price ? price : 'Pricless'}</p>
      </div>
    </>
  );
};

export default ProductCard;
