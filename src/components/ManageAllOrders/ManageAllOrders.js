import React, { useEffect, useState } from "react";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://roam-server.onrender.com/myorders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="chose-head">
        <h3 className="chose1"> Users Selected Plans</h3>
        <h2 className="chose2">
          <span className="span-bg">Manage</span> Users Destination Plans
        </h2>
      </div>

      <div className="container-fluid mt-5">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="thead-style">
              <tr>
                <th scope="col" className="text-center">
                  ID
                </th>
                <th scope="col" className="text-center">
                  Name
                </th>
                <th scope="col" className="text-center">
                  Email
                </th>
                <th scope="col" className="text-center">
                  Destination
                </th>
                <th scope="col" className="text-center">
                  Address
                </th>
              </tr>
            </thead>
            {orders.map((order) => (
              <tbody key={order?._id} className="tbody-style">
                <tr>
                  <th scope="row" className="text-center">
                    {order?._id}
                  </th>
                  <td className="text-center">{order?.name}</td>
                  <td className="text-center">{order?.email}</td>
                  <td className="text-center">{order?.dest}</td>
                  <td>{order?.address}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
