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
import { useAuth } from "../../../context/AuthContext";

export default function AllCategories() {
  const [Categories, setCategories] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    fetchCategories(); // Assuming you meant 'fetchCategories' instead of 'fetchCategorys'
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/Admin/Categories",
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setCategories(response.data.Categories);
    } catch (error) {
      console.error(
        "Error fetching categories:",
        error.response?.data || error.message
      );
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this Category?")) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/Admin/Categories/${id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        console.log(response.data.message);
        fetchCategories();
      } catch (error) {
        console.error(
          "Error deleting category:",
          error.response?.data?.message || error.message
        );
        // Handle error appropriately, e.g., show an error message to the user
      }
    }
  };

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/Categories", {
  //     headers: {
  //       Authorization: `Bearer ${auth.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setCategories(data.Categories));
  // }, []);

  // const fetchCategorys = async () => {
  //   await axios
  //     .get("http://127.0.0.1:8000/api/Admin/Categories", {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => setCategories(data.Categories));
  // };
  // const deleteCategory = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this Category?")) {
  //     await axios
  //       .delete(`http://127.0.0.1:8000/api/Admin/Categories/${id}`)
  //       .then(({ data }) => {
  //         console.log(data.message);
  //         fetchCategorys();
  //       })
  //       .catch(({ response: { data } }) => {
  //         console.log(data.message);
  //       });
  //   }
  // };
  const ShowCategories = Categories.map((Category) => (
    <tr
      className="bg-white text-sm dark:bg-gray-800 text-center hover:bg-amber-50 dark:hover:bg-gray-600"
      key={Category.id}
    >
      <td className="flex justify-center">
        <div className="w-20 h-20 flex justify-center items-center">
          <img
            className="w-12 h-min"
            src={
              Category.Image
                ? `http://127.0.0.1:8000/Storage/Images/Category/${Category.Image}`
                : "Image"
            }
            alt=""
          />
        </div>
      </td>
      <th
        scope="row"
        className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {Category.Name}
      </th>
      <td className=" ">{Category.NumberProducts}</td>
      <td className="px-4  text-right">
        <div className="flex justify-between text-xl">
          <Link
            to={`Show/${Category.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>
          <Link
            to={`Edit/${Category.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          <Link
            onClick={() => deleteCategory(Category.id)}
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
        <NavSectionAdmin href="Create" Link="Create Category" />
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-bold uppercase bg-black text-white dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-2 py-2">
                IMG
              </th>
              <th scope="col" className="p-2">
                Name
              </th>
              <th scope="col" className="p-2">
                NumberProducts
              </th>
              <th scope="col" className="p-2 text-center w-44 ">
                <span className="">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>{ShowCategories}</tbody>
        </table>
      </div>
    </>
  );
}
