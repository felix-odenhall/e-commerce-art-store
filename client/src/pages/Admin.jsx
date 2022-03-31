import { useState, useEffect } from 'react';
import * as config from '../Config';

const Admin = () => {
  const [status, setStatus] = useState(false);
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
  }, [status]);
  console.log(orders);

  const updateOrder = (orderId) => {
    fetch(`${config.API_BASE_URL}/orders/${orderId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => setStatus(!status))
      .catch((err) => {
        console.error(err);
      });
  };

  return orders ? (
    <div>
      <section className="flex flex-col items-center mx-4 py-5">
        <table className=" bg-slate-300 w-full mx-4 table-fixed">
          <thead className="m-2">
            <tr className="m-2">
              <th>Order ID</th>
              <th>Status</th>
              <th>Ship</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {orders.map((order, i) => {
              return (
                <tr
                  className=" bg-slate-500 p-6 border-b-4 border-slate-100"
                  key={order._id}
                >
                  <td className="text-xl font-semibold px-6 py-10">
                    {order._id}
                  </td>
                  <td> {order.isShipped ? 'Shipped' : 'Not shipped'}</td>
                  <td className="px-6 py-2">
                    <button
                      className="bg-slate-100"
                      onClick={() => {
                        updateOrder(order._id);
                      }}
                    >
                      Ship
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Admin;
