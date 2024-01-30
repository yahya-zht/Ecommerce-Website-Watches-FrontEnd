import React, { useEffect, useState } from "react";
import NavSectionAdmin from "../../../components/Admin/NavSectionAdmin";
import axios from "axios";
import {
  // faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AllProviders() {
  const [Providers, setProviders] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/Admin/Providers",
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setProviders(response.data.Providers);
    } catch (error) {
      console.error(
        "Error fetching providers:",
        error.response?.data?.message || error.message
      );
    }
  };

  const deleteProvider = async (id) => {
    if (window.confirm("Are you sure you want to delete this provider?")) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/Admin/Providers/${id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );

        console.log(response.data.message);
        fetchProviders();
      } catch (error) {
        console.error(
          "Error deleting provider:",
          error.response?.data?.message || error.message
        );
      }
    }
  };

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/Admin/Providers", {
  //     headers: {
  //       Authorization: `Bearer ${auth.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setProviders(data.Providers));
  // }, []);

  // const fetchProducts = async () => {
  //   await axios
  //     .get("http://127.0.0.1:8000/api/Admin/Providers", {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => setProviders(data.Providers));
  // };
  // const deleteProvider = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this product?")) {
  //     await axios
  //       .delete(`http://127.0.0.1:8000/api/Admin/Providers/${id}`, {
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
  const ShowProviders = Providers.map((Provider) => (
    <tr
      className="bg-white text-sm dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-gray-600"
      key={Provider.id}
    >
      <th
        scope="row"
        className="font-medium text-gray-900 whitespace-nowrap dark:text-white px-2 text-center "
      >
        <div className="my-5">{Provider.Ref}</div>
      </th>
      <td className=" ">{Provider.Name}</td>
      <td className=" ">{Provider.Email}</td>
      <td className=" ">{Provider.Telephone}</td>
      <td className=" ">{Provider.Address}</td>
      <td className=" ">{Provider.City}</td>
      <td className=" ">{Provider.Country}</td>
      <td className="px-4  text-right">
        <div className="flex justify-between text-xl">
          {/* <Link
            to={`Show/${Provider.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link> */}
          <Link
            to={`Edit/${Provider.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          {/* <button onClick={deleteProducts(product.id)}>Delete</button> */}
          <Link
            onClick={() => deleteProvider(Provider.id)}
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
        <NavSectionAdmin href="Create" Link="Create Provider" />
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
                Email
              </th>
              <th scope="col" className="p-2">
                Telephone
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
              <th scope="col" className="p-2 text-center w-44 ">
                <span className="">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>{ShowProviders}</tbody>
        </table>
      </div>
    </>
  );
}
