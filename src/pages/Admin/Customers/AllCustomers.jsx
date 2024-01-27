import React, { useEffect, useState } from "react";
import NavSectionAdmin from "../../../components/Admin/NavSectionAdmin";
import axios from "axios";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function AllCustomers() {
  const [Customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data.Customers));
  }, []);

  const fetchProducts = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/Customers")
      .then(({ data }) => setCustomers(data.Customers));
  };
  const deleteCustomer = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios
        .delete(`http://127.0.0.1:8000/api/Customers/${id}`)
        .then(({ data }) => {
          console.log(data.message);
          fetchProducts();
        })
        .catch(({ response: { data } }) => {
          console.log(data.message);
        });
    }
  };
  const ShowCustomers = Customers.map((Customer) => (
    <tr
      className="bg-white text-sm dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-gray-600"
      key={Customer.id}
    >
      <th
        scope="row"
        className="font-medium text-gray-900 whitespace-nowrap dark:text-white px-2 text-center"
      >
        <div className="my-3">{Customer.name}</div>
      </th>
      <td className=" ">{Customer.email}</td>
      <td className=" ">{Customer.telephone}</td>
      <td className=" ">{Customer.City}</td>
      <td className=" ">{Customer.Country}</td>
      <td className="px-4  text-right">
        <div className="flex justify-between text-xl">
          {/* <Link
            to={`Show/${Customer.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link> */}
          <Link
            to={`Edit/${Customer.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          {/* <button onClick={deleteProducts(product.id)}>Delete</button> */}
          <Link
            onClick={() => deleteCustomer(Customer.id)}
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
        <p className="text-center font-bold text-amber-500 text-4xl">
          All Customers
        </p>
        {/* <NavSectionAdmin href="Create" Link="Create Customer" /> */}
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-bold uppercase bg-black text-white dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-2 py-2">
                name
              </th>
              <th scope="col" className="p-2">
                email
              </th>
              <th scope="col" className="p-2">
                telephone
              </th>
              <th scope="col" className="p-2">
                City
              </th>
              <th scope="col" className="p-2">
                Country
              </th>
              <th scope="col" className="p-2 text-center w-44 ">
                <span className="">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>{ShowCustomers}</tbody>
        </table>
      </div>
    </>
  );
}
