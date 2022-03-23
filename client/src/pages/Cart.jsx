const Cart = () => {
  const [cart, setItems] = useState([]);
  useEffect(() => {
    fetch(`${config.API_BASE_URL}/products`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setItems(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <div>Cart</div>;
};

export default Cart;
