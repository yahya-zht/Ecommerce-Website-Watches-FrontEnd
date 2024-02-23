import React, { useEffect, useState } from "react";
import NavSectionAdmin from "../../../components/Admin/NavSectionAdmin";
import axios from "axios";
import {
  faEye,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AllCategories() {
  const [Categories, setCategories] = useState([]);
  const auth = useAuth();
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetchCategories();
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/Admin/Categories/search/${query}`
        );
        const data = await response.json();
        data ? setCategories(data) : setCategories([]);
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
      if (query === "") {
        setCategories(response.data.Categories);
      }
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
        {/* <NavSectionAdmin href="Create" Link="Create Category" /> */}
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
          <div className="w-1/5 flex justify-center">
            <Link
              to="Create"
              className=" py-2 bg-amber-600 w-full text-center  text-white rounded-xl font-semibold hover:bg-green-600"
            >
              Create Categorie
            </Link>
          </div>
        </div>
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-bold uppercase bg-blue-950 text-white dark:bg-gray-700 dark:text-gray-400 text-center">
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
