import { useState, useEffect } from 'react';
import * as config from '../Config';

const Admin = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`${config.API_BASE_URL}/orders`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setOrders(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return orders ? (
    <div>
      {orders.map((order) => {
        return order.products.map((prod) => {
          return (
            <div key={prod.productid}>
              <h1>{prod.producttitle}</h1>
              <h1>{prod.productid}</h1>
              <h1>{prod.productamount}</h1>
            </div>
          );
        });
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Admin;
