import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function CreateCategory() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [NumberProducts, setNumberProducts] = useState("");
  const [Error, setError] = useState([]);
  const auth = useAuth();
  const handleChange = (file) => {
    setImage(file[0]);
  };
  const createCategory = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Image", Image);
    formData.append("NumberProducts", NumberProducts);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/Admin/Categories`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Content-Type": "multipart/form-data", // Set the content type for FormData
          },
        }
      );
      console.log(response.data.status);
      console.log("Category created successfully");
      navigate("/Admin/Categories");
    } catch (error) {
      console.error(
        "Error creating category:",
        error.response?.data || error.message
      );

      if (error.response && error.response.status === 422) {
        console.log("Validation errors:", error.response.data.errors);
        setError(error.response.data.errors);
      } else {
        console.log("Other error messages:", error.response?.data?.messages);
        console.log("Error");
      }
    }
  };

  // const createCategory = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("Name", Name);
  //   formData.append("Image", Image);
  //   formData.append("NumberProducts", NumberProducts);
  //   await axios
  //     .post("http://127.0.0.1:8000/api/Admin/Categories", formData, {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => {
  //       console.log(data.status);
  //       console.log("Ok");
  //       navigate("/Admin/Categories");
  //     })
  //     .catch(({ response }) => {
  //       if (response.status === 442) {
  //         console.log(response.data.errors);
  //         console.log("Error 442 ");
  //       } else {
  //         console.log("Error");
  //         console.log(response.data);
  //         setError(response.data.errors);
  //       }
  //     });
  // };

  return (
    <>
      <div className="p-5 mt-10 bg-white rounded-2xl shadow-xl">
        <p className="text-center text-5xl border-b-4 border-green-600 pb-2 mb-10">
          Category New
        </p>
        <form onSubmit={createCategory} encType="multipart/form-data">
          <div>
            <div className="mb-5 flex">
              <div className="w-3/5 mr-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="base-input"
                  // name="Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">{Error.Name}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="user_avatar"
              >
                Image
              </label>
              <input
                onChange={(e) => handleChange(e.target.files)}
                className="block w-full text-sm  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                name="Image_Category"
              />
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">{Error.Image}</p>
                )}
              </div>
            </div>

            <div className="flex ">
              <div className="mr-2 w-1/3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NumberCategorys
                </label>
                <input
                  value={NumberProducts}
                  name="NumberCategorys"
                  onChange={(e) => setNumberProducts(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">
                      {Error.NumberCategorys}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="my-4 flex justify-between">
              <div className=" ml-7 ">
                <Link
                  to={`/Admin/Categories`}
                  className="text-5xl flex items-center text-amber-500  hover:text-red-600 "
                >
                  <FontAwesomeIcon icon={faCircleLeft} />
                </Link>
              </div>
              <div>
                <input
                  type="submit"
                  value="Add Category"
                  className="px-16 py-3 rounded-xl bg-green-600 text-white cursor-pointer hover:bg-amber-600 font-semibold"
                />
              </div>
            </div>
          </div>
          <div></div>
        </form>
      </div>
    </>
  );
}
