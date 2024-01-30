import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [NumberProducts, setNumberProducts] = useState("");
  const [Error, setError] = useState([]);
  const auth = useAuth();
  const changeHandler = (e) => {
    setImage(e.target.files[0]);
  };
  //   const handleChange = (file) => {
  //     setImage(file[0]);
  //   };
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Admin/Categories/${id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      const { Name, NumberProducts, Image } = response.data.Category;
      setName(Name);
      setNumberProducts(NumberProducts);
      setImage(Image);
    } catch (error) {
      console.error(
        "Error fetching category:",
        error.response?.data?.message || error.message
      );
    }
  };

  const UpdateCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("Name", Name);
    formData.append("NumberProducts", NumberProducts);
    if (Image !== null) {
      formData.append("Image", Image);
    }
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/Admin/Categories/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/Admin/Categories");
    } catch (error) {
      console.error(
        "Error creating/updating category:",
        error.response?.data?.message || error.message
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

  // useEffect(() => {
  //   fetchCategory();
  // }, []);
  // const fetchCategory = async () => {
  //   await axios
  //     .get(`http://127.0.0.1:8000/api/Admin/Categories/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => {
  //       const { Name, NumberProducts, Image } = data.Category;
  //       setName(Name);
  //       setNumberProducts(NumberProducts);
  //       setImage(Image);
  //     })
  //     .catch(({ response: { data } }) => {
  //       console.log(data.message);
  //     });
  // };

  // const createCategory = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("_method", "PATCH");
  //   formData.append("Name", Name);
  //   formData.append("NumberProducts", NumberProducts);
  //   if (Image !== null) {
  //     formData.append("Image", Image);
  //   }
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
          Edit Category
        </p>
        <form onSubmit={UpdateCategory} encType="multipart/form-data">
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
                onChange={changeHandler}
                className="block w-full text-sm  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                name="Image"
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
                  NumberProducts
                </label>
                <input
                  value={NumberProducts}
                  name="NumberProducts"
                  onChange={(e) => setNumberProducts(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">
                      {Error.NumberProducts}
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
