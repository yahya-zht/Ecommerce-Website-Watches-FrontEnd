import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AddProduct() {
  const navigate = useNavigate();
  const [Ref, setRef] = useState("");
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [Description, setDescription] = useState("");
  const [PricePur, setPricePur] = useState();
  const [PriceSal, setPriceSal] = useState();
  const [PriceOld, setPriceOld] = useState();
  const [Quantier, setQuantier] = useState();
  const [Provider, setProvider] = useState();
  const [Providers, setProviders] = useState([]);
  // const [Category, setCategory] = useState([]);
  const [selectCategories, setSelectCategories] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [Sales, setSales] = useState(0);
  const [Error, setError] = useState([]);
  const auth = useAuth();

  const handleChange = (file) => {
    setImage(file[0]);
  };
  useEffect(() => {
    fetchProviders();
    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const categoryId = parseInt(e.target.value);
    const isChecked = e.target.checked;

    if (isChecked) {
      // If checkbox is checked, add category to selected categories
      setSelectCategories([...selectCategories, categoryId]);
    } else {
      // If checkbox is unchecked, remove category from selected categories
      setSelectCategories(selectCategories.filter((id) => id !== categoryId));
    }
  };
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
      // Handle error appropriately, e.g., show an error message to the user
    }
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

      setCategories(response.data.Categories);
      // console.log(response.data.Categories);
    } catch (error) {
      console.error(
        "Error fetching providers:",
        error.response?.data?.message || error.message
      );
      // Handle error appropriately, e.g., show an error message to the user
    }
  };
  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Ref", Ref);
    formData.append("Name", Name);
    formData.append("Image_Product", Image);
    formData.append("Description", Description);
    formData.append("Price_Purchase", PricePur);
    formData.append("Price_Sale", PriceSal);
    formData.append("Price_First", PriceOld);
    formData.append("Quantity", Quantier);
    formData.append("Sales", Sales);
    formData.append("category", Sales);
    formData.append("provider_id", Provider);
    selectCategories.forEach((categoryId) => {
      formData.append("categories[]", categoryId);
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/Admin/Products",
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Content-Type": "multipart/form-data", // Set the content type for FormData
          },
        }
      );

      console.log(response.data.status);
      console.log("Product created successfully");
      navigate("/Admin/Products");
    } catch (error) {
      console.error(
        "Error creating product:",
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

  // useEffect(() => {
  //   fetchProviders();
  // }, []);
  // const fetchProviders = async () => {
  //   await axios
  //     .get("http://127.0.0.1:8000/api/Admin/Providers")
  //     .then(({ data }) => {
  //       setProviders(data.Providers);
  //     });
  // };
  // const createProduct = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("Ref", Ref);
  //   formData.append("Name", Name);
  //   formData.append("Image_Product", Image);
  //   formData.append("Description", Description);
  //   formData.append("Price_Purchase", PricePur);
  //   formData.append("Price_Sale", PriceSal);
  //   formData.append("Price_First", PriceOld);
  //   formData.append("Quantity", Quantier);
  //   formData.append("Sales", Sales);
  //   formData.append("provider_id", Provider);
  //   await axios
  //     .post("http://127.0.0.1:8000/api/Admin/Products", formData, {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => {
  //       console.log(data.status);
  //       console.log("Ok");
  //       navigate("/Admin/Products");
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
          Product New
        </p>
        <form onSubmit={createProduct} encType="multipart/form-data">
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
              <div className="w-2/5 ">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ref
                </label>
                <input
                  value={Ref}
                  onChange={(e) => setRef(e.target.value)}
                  type="text"
                  id="base-input"
                  name="Ref"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">{Error.Ref}</p>
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
              {/* <input
                value={Image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                name="Image_Product"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              /> */}
              <input
                // onChange={changeHandler}
                onChange={(e) => handleChange(e.target.files)}
                className="block w-full text-sm  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                name="Image_Product"
              />
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">
                    {Error.Image_Product}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                description
              </label>
              <textarea
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                name="Description"
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">
                    {Error.Description}
                  </p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="mr-2 w-1/3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  PRICE PURCHASE
                </label>
                <input
                  value={PricePur}
                  onChange={(e) => setPricePur(e.target.value)}
                  type="text"
                  name="Price_Purchase"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">
                      {Error.Price_Purchase}
                    </p>
                  )}
                </div>
              </div>
              <div className="mr-2 w-1/3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  PRICE SALE
                </label>
                <input
                  value={PriceSal}
                  onChange={(e) => setPriceSal(e.target.value)}
                  type="text"
                  name="Price_Sale"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">
                      {Error.Price_Sale}
                    </p>
                  )}
                </div>
              </div>
              <div className="mr-2 w-1/3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  PRICE Old
                </label>
                <input
                  value={PriceOld}
                  name="Price_First"
                  onChange={(e) => setPriceOld(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">
                      {Error.Price_First}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="mr-2 w-1/3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity
                </label>
                <input
                  value={Quantier}
                  name="Quantity"
                  onChange={(e) => setQuantier(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">
                      {Error.Quantity}
                    </p>
                  )}
                </div>
              </div>
              <div className="mr-2 w-1/3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sales
                </label>
                <input
                  value={Sales}
                  name="Sales"
                  onChange={(e) => setSales(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">{Error.Sales}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
              >
                Categories
              </label>
              <div className="mb-3 flex">
                {Categories.map((item) => (
                  <div className="" key={item.id}>
                    <input
                      id={item.Name}
                      name="category[]"
                      onChange={handleCategoryChange}
                      value={item.id}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={item.Name}
                      className="ms-1 mr-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {item.Name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Provider
              </label>
              <select
                // value={Provider}
                name="provider_id"
                defaultValue={Provider ? Provider : ""}
                onChange={(e) => setProvider(e.target.value)}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select a provider</option>
                {Providers.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.Name}
                  </option>
                ))}
              </select>
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">
                    {Error.provider_id}
                  </p>
                )}
              </div>
            </div>
            <div className="my-4 flex justify-between">
              <div className=" ml-7 ">
                <Link
                  to={`/Admin/Products`}
                  className="text-5xl flex items-center text-amber-500  hover:text-red-600 "
                >
                  <FontAwesomeIcon icon={faCircleLeft} />
                </Link>
              </div>
              <div>
                <input
                  type="submit"
                  value="Add Product"
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
