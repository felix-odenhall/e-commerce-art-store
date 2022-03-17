import './Button.css';

const Button = ({ style, title }) => {
  return (
    <button className={`${style} btn`}>
      {title ? title : 'Add some text'}
    </button>
  );
};

export default Button;
