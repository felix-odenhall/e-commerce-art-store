import './_ProductCard.scss';

import { Link } from 'react-router-dom';

const ProductCard = ({ _id, image, title, type, price }) => {
  return (
    <Link to={`/product/${_id}`}>
      <div className="card-container">
        <img
          className="product-img"
          src={image}
          alt="A pricture of the art work"
        />
        <h3>{title ? title : 'Coming soon'}</h3>
        <p>{type ? type : ''}</p>
        <p>${price ? price : 'Pricless'}</p>

        <button>Buy</button>
      </div>
    </Link>
  );
};

export default ProductCard;
