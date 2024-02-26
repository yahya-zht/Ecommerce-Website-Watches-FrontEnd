import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavSectionAdmin from "../../../components/Admin/NavSectionAdmin";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
// import { useShoppingCart } from "../../../context/ShoppingCart";
import { useSearch } from "../../../context/Search";
export default function AllProducts() {
  const auth = useAuth();
  const [Products, setProducts] = useState([]);
  const { resultsSearch, query } = useSearch();
  // const { resultsSearch, query } = useShoppingCart();
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/Admin/Products", {
  //     headers: {
  //       Authorization: `Bearer ${auth.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     // .then((data) => console.log(data))
  //     .then((data) => console.log(data.Products))
  //     // .then((response) => console.log(response))
  //     .then((data) => setProducts(data.Products));
  //   // .then((data) => setProviders(data.Providers));
  // }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Admin/Products", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.Products) {
          if (query === "") {
            // console.log("query !== =>", query);
            // console.log("No results found", resultsSearch);
            setProducts(data.Products);
          } else {
            // console.log("query []=>", query);
            // console.log("2 =>", resultsSearch);
            setProducts(resultsSearch);
          }
        } else {
          throw new Error("Products data not found in the response");
        }
      })
      .catch((err) => setError(err.message));
  }, [auth.token, resultsSearch]);

  const fetchProducts = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/Admin/Products", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then(({ data }) => setProducts(data.Products));
  };
  const deleteProducts = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios
        .delete(`http://127.0.0.1:8000/api/Admin/Products/${id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then(({ data }) => {
          console.log(data.message);
          fetchProducts();
        })
        .catch(({ response: { data } }) => {
          console.log(data.message);
        });
    }
  };
  const ShowProducts = Products.map((product) => (
    <tr
      className="bg-white text-sm dark:bg-gray-800 text-center hover:bg-amber-50 dark:hover:bg-gray-600"
      key={product.id}
    >
      <td className="flex justify-center">
        {/* <div className="w-20">
          <img src={product.Image_Product} alt="" />
        </div> */}
        <div className="w-20 h-20 flex justify-center items-center">
          <img
            className="w-12 h-min"
            src={`http://127.0.0.1:8000/Storage/Images/product/${product.Image_Product}`}
            alt=""
          />
        </div>
      </td>
      <th
        scope="row"
        className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product.Ref}
      </th>
      <th
        scope="row"
        className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product.Name}
      </th>
      <td className=" ">${product.Price_Purchase}.00</td>
      <td className=" ">${product.Price_Sale}.00</td>
      <td className=" ">{product.Sales}</td>
      <td className=" ">{product.Quantity}</td>

      <td className=" ">{product.provider ? product.provider.Name : "Null"}</td>

      <td className="px-4  text-right">
        <div className="flex justify-between text-xl">
          <Link
            to={`Show/${product.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>
          <Link
            to={`Edit/${product.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          {/* <button onClick={deleteProducts(product.id)}>Delete</button> */}
          <Link
            onClick={() => deleteProducts(product.id)}
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
        <NavSectionAdmin href="Create" Link="Add Product" />
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-bold uppercase bg-blue-950 text-white dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-2 py-2">
                IMG
              </th>
              <th scope="col" className="p-2 ">
                Ref
              </th>
              <th scope="col" className="p-2">
                Name
              </th>
              <th scope="col" className="p-2">
                Price Purchase
              </th>
              <th scope="col" className="p-3">
                Price Sale
              </th>
              <th scope="col" className="p-2">
                Sales
              </th>
              <th scope="col" className="p-2">
                Quantier
              </th>
              <th scope="col" className="p-2">
                Provider
              </th>
              <th scope="col" className="p-2 text-center w-44 ">
                <span className="">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>{ShowProducts}</tbody>
        </table>
      </div>
    </>
  );
}
