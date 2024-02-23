import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

export default function Dashboard() {
  const [Orders, setOrders] = useState([]);
  const [Counts, setCounts] = useState([]);
  const [TopSelling, setTopSelling] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/Admin/Dashboard",
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setOrders(response.data.Orders);
      setCounts(response.data.Counts);
      setTopSelling(response.data.TopSelling);
    } catch (error) {
      console.error(
        "Error fetching orders:",
        error.response?.data?.message || error.message
      );
    }
  };
  const Top = TopSelling.map((p) => {
    return (
      <tr key={p.id}>
        <td>
          <img
            className="w-14"
            src={`http://127.0.0.1:8000/Storage/Images/product/${p.Image_Product}`}
            alt=""
          />
        </td>
        <td>{p.Ref}</td>
        <td>{p.Name}</td>
        <td>{p.Quantity}</td>
        <td>{p.Total} DH</td>
      </tr>
    );
  });
  return (
    <>
      <div className="h-full flex flex-col justify-center">
        <div className="mx-4">
          <div className="flex justify-between font-bold text-2xl mb-3">
            <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center">Today's orders</p>
              <p className="text-center">{Orders ? Orders.OrdersDay : 0}</p>
            </div>

            <div className="flex flex-col w-1/3 mx-4 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center">Earnings This Day</p>
              <p className="text-center">
                {" "}
                {Orders ? Orders.EarningsDay : 0} DH
              </p>
            </div>
            <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center">Nombre Products in Stok</p>
              <p className="text-center">{Counts ? Counts.ProductsCount : 0}</p>
            </div>
          </div>
          <div className="flex justify-between font-bold text-2xl mb-3">
            <div className="flex flex-col w-1/3  text-center justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center">Orders of the week</p>
              <p className="text-center">{Orders ? Orders.OrdersWeek : 0}</p>
            </div>

            <div className="flex flex-col w-1/3 mx-4 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center">Earnings This Week</p>
              <p className="text-center">
                {Orders ? Orders.EarningsWeek : 0} DH
              </p>
            </div>
            <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center">Nombre Customer</p>
              <p className="text-center">{Counts ? Counts.CustomerCount : 0}</p>
            </div>
          </div>
          <div className="flex justify-between font-bold text-2xl mb-3">
            <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center">Orders Of The Month</p>
              <p className="text-center">{Orders ? Orders.OrdersMonth : 0}</p>
            </div>

            <div className="flex flex-col w-1/3 mx-4 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center">Earnings This Month</p>
              <p className="text-center">
                {Orders ? Orders.EarningsMonth : 0} DH
              </p>
            </div>
            <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center">Earnings This year</p>
              <p className="text-center">
                {Orders ? Orders.EarningsYear : 0} DH
              </p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/2 mr-4  p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center font-bold text-2xl border-b-4 pb-2 border-amber-500">
                New Message
              </p>
              <div>
                <p>Message 01</p>
                <p>Message 02</p>
                <p>Message 03</p>
              </div>
            </div>
            <div className="w-1/2 ml-4  p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
              <p className="text-center font-bold text-2xl border-b-4 pb-2 border-amber-500">
                Best 3 Selling Products This Month
              </p>
              <table>
                <thead>
                  <tr>
                    <th>IMG</th>
                    <th>Ref</th>
                    <th>Name</th>
                    <th>Quantiter</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>{Top}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
