import React, { useEffect, useState } from "react";
import NavSectionAdmin from "../../../components/Admin/NavSectionAdmin";
import axios from "axios";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AllOrders() {
  const [Orders, setOrders] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/Admin/Orders",
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setOrders(response.data.Orders);
    } catch (error) {
      console.error(
        "Error fetching orders:",
        error.response?.data?.message || error.message
      );
    }
  };

  const deleteOrder = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/Admin/Orders/${id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );

        console.log(response.data.message);
        fetchOrders();
      } catch (error) {
        console.error(
          "Error deleting order:",
          error.response?.data?.message || error.message
        );
      }
    }
  };

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/Admin/Orders", {
  //     headers: {
  //       Authorization: `Bearer ${auth.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setOrders(data.Orders));
  // }, []);

  // const fetchProducts = async () => {
  //   await axios
  //     .get("http://127.0.0.1:8000/api/Admin/Orders", {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => setOrders(data.Orders));
  // };
  // const deleteOrder = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this Order?")) {
  //     await axios
  //       .delete(`http://127.0.0.1:8000/api/Admin/Orders/${id}`, {
  //         headers: {
  //           Authorization: `Bearer ${auth.token}`,
  //         },
  //       })
  //       .then(({ data }) => {
  //         console.log(data.message);
  //         fetchProducts();
  //       })
  //       .catch(({ response: { data } }) => {
  //         console.log(data.message);
  //       });
  //   }
  // };
  const ShowOrders = Orders.map((Order) => (
    <tr
      className="bg-white text-sm dark:bg-gray-800  hover:bg-amber-50 dark:hover:bg-gray-600"
      key={Order.id}
    >
      <th
        scope="row"
        className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="w-20 h-20 flex justify-center items-center">
          {Order.Ref}
        </div>
      </th>
      <td className=" ">{Order.Name}</td>
      <td className=" ">{Order.Telephone}</td>
      <td className=" ">{Order.Total_Price}</td>
      <td className=" ">{Order.Email}</td>
      <td className=" ">{Order.Address}</td>
      <td className=" ">{Order.City}</td>
      <td className=" ">{Order.Country}</td>
      <td className=" ">{Order.created_at}</td>
      <td className="px-4  text-right">
        <div className="flex justify-between text-xl">
          <Link
            to={`Show/${Order.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>
          {/* <Link
            to={`Edit/${Order.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link> */}
          <Link
            onClick={() => deleteOrder(Order.id)}
            to="#"
            className="font-medium text-red-700 dark:text-blue-500 hover:underline hover:text-red-500"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Link>
        </div>
      </td>
    </tr>
  ));
  return (
    <>
      <nav className="rounded-xl p-3 mb-2 shadow-xl bg-white">
        <NavSectionAdmin href="Create" Link="Create Order" />
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-bold uppercase bg-black text-white dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-2 py-2">
                Ref
              </th>
              <th scope="col" className="p-2">
                Name
              </th>
              <th scope="col" className="p-2">
                Telephone
              </th>
              <th scope="col" className="p-2">
                Total_Price
              </th>
              <th scope="col" className="p-2">
                Email
              </th>
              <th scope="col" className="p-2">
                Address
              </th>
              <th scope="col" className="p-2">
                City
              </th>
              <th scope="col" className="p-2">
                Country
              </th>
              <th scope="col" className="p-2">
                Date Order
              </th>
              <th scope="col" className="p-2 text-center w-44 ">
                <span className="">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>{ShowOrders}</tbody>
        </table>
      </div>
    </>
  );
}
