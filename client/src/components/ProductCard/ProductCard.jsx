import './ProductCard.css';
import Button from '../Button/Button';

const ProductCard = ({ _id, image, title, type }) => {
  return (
    <div className="card-container">
      <img
        className="product-img"
        src={image}
        alt="A pricture of the art work"
      />
      <h3>{title ? title : 'Coming soon'}</h3>
      <p>{type ? type : ''}</p>
      <Button style="btn-yes" title="buy" />
    </div>
  );
};

export default ProductCard;
