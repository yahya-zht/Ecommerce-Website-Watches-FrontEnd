import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AllCustomers() {
  const [Customers, setCustomers] = useState([]);
  const auth = useAuth();
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetchCustomers();
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/Admin/Customers/search/${query}`
        );
        const data = await response.json();
        data ? setCustomers(data) : setCustomers([]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (query !== "") {
      fetchSearch();
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/Admin/Customers",
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      if (query === "") {
        setCustomers(response.data.Customers);
      }
    } catch (error) {
      console.error(
        "Error fetching customers:",
        error.response?.data?.message || error.message
      );
    }
  };

  const deleteCustomer = async (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/Admin/Customers/${id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );

        console.log(response.data.message);
        fetchCustomers();
      } catch (error) {
        console.error(
          "Error deleting customer:",
          error.response?.data?.message || error.message
        );
      }
    }
  };

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/Customers", {
  //     headers: {
  //       Authorization: `Bearer ${auth.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setCustomers(data.Customers));
  // }, []);

  // const fetchCustomers = async () => {
  //   await axios
  //     .get("http://127.0.0.1:8000/api/Customers", {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => setCustomers(data.Customers));
  // };
  // const deleteCustomer = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this product?")) {
  //     await axios
  //       .delete(`http://127.0.0.1:8000/api/Admin/Customers/${id}`, {
  //         headers: {
  //           Authorization: `Bearer ${auth.token}`,
  //         },
  //       })
  //       .then(({ data }) => {
  //         console.log(data.message);
  //         fetchCustomers();
  //       })
  //       .catch(({ response: { data } }) => {
  //         console.log(data.message);
  //       });
  //   }
  // };
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
        <div className="flex justify-between">
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <FontAwesomeIcon
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                icon={faMagnifyingGlass}
              />
            </span>
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-1/3 flex justify-center">
            <p className="text-center font-bold text-amber-500 text-4xl">
              All Customers
            </p>
          </div>
        </div>
        {/* <NavSectionAdmin href="Create" Link="Create Customer" /> */}
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-bold uppercase bg-blue-950 text-white dark:bg-gray-700 dark:text-gray-400 text-center">
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
