import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function UpdateProduct() {
  // const id = window.location.pathname.slice(-1)[0];

  const navigate = useNavigate();
  const { id } = useParams();
  const [Ref, setRef] = useState("");
  const [Name, setName] = useState("");
  const [Image_Product, setImage_Product] = useState(null);
  const [Description, setDescription] = useState("");
  const [PricePur, setPricePur] = useState(0);
  const [PriceSal, setPriceSal] = useState(0);
  const [PriceOld, setPriceOld] = useState(0);
  const [Quantier, setQuantier] = useState(0);
  const [Sales, setSales] = useState(0);
  const [Provider, setProvider] = useState();
  const [Providers, setProviders] = useState([]);
  const [Errors, setErrors] = useState([]);
  const auth = useAuth();
  // useEffect(() => {
  //   fetchProduct();
  // }, []);
  // const fetchProduct = async () => {
  //   await axios
  //     .get(`http://127.0.0.1:8000/api/Admin/Products/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => {
  //       const {
  //         Name,
  //         Description,
  //         Price_Purchase,
  //         Price_First,
  //         Price_Sale,
  //         Quantity,
  //         provider_id,
  //         Ref,
  //         Sales,
  //         Image_Product,
  //       } = data.product;
  //       setRef(Ref);
  //       setName(Name);
  //       setDescription(Description);
  //       setPricePur(Price_Purchase);
  //       setPriceSal(Price_Sale);
  //       setPriceOld(Price_First);
  //       setQuantier(Quantity);
  //       setSales(Sales);
  //       setProvider(provider_id);
  //       setImage_Product(Image_Product);
  //     })
  //     .catch(({ response: { data } }) => {
  //       console.log(data.message);
  //     });
  // };
  // useEffect(() => {
  //   fetchProviders();
  // }, []);
  // const fetchProviders = async () => {
  //   await axios
  //     .get("http://127.0.0.1:8000/api/Admin/Providers", {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => {
  //       setProviders(data.Providers);
  //     });
  // };
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Admin/Products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      const {
        Name,
        Description,
        Price_Purchase,
        Price_First,
        Price_Sale,
        Quantity,
        provider_id,
        Ref,
        Sales,
        Image_Product,
      } = response.data.product;

      setRef(Ref);
      setName(Name);
      setDescription(Description);
      setPricePur(Price_Purchase);
      setPriceSal(Price_Sale);
      setPriceOld(Price_First);
      setQuantier(Quantity);
      setSales(Sales);
      setProvider(provider_id);
      setImage_Product(Image_Product);
    } catch (error) {
      console.error(
        "Error fetching product:",
        error.response?.data?.message || error.message
      );
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

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
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  const changeHandler = (e) => {
    setImage_Product(e.target.files[0]);
  };
  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("Ref", Ref);
    formData.append("Name", Name);
    formData.append("Description", Description);
    formData.append("Price_Purchase", PricePur);
    formData.append("Price_Sale", PriceSal);
    formData.append("Quantity", Quantier);
    formData.append("Price_First", PriceOld);
    formData.append("Sales", Sales);
    formData.append("provider_id", Provider);

    if (Image_Product !== null) {
      formData.append("Image_Product", Image_Product);
    }

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/Admin/Products/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Content-Type": "multipart/form-data", // Set the content type for FormData
          },
        }
      );

      console.log(response.data);
      navigate("/Admin/Products");
    } catch (error) {
      console.error(
        "Error updating product:",
        error.response?.data || error.message
      );

      if (error.response && error.response.status === 422) {
        console.log("Validation errors:", error.response.data.errors);
        setErrors(error.response.data.errors);
      } else {
        console.log("Other error messages:", error.response?.data?.messages);
      }
    }
  };

  // const updateProduct = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("_method", "PATCH");
  //   formData.append("Ref", Ref);
  //   formData.append("Name", Name);
  //   formData.append("Description", Description);
  //   formData.append("Price_Purchase", PricePur);
  //   formData.append("Price_Sale", PriceSal);
  //   formData.append("Quantity", Quantier);
  //   formData.append("Price_First", PriceOld);
  //   formData.append("Sales", Sales);
  //   formData.append("provider_id", Provider);
  //   if (Image_Product !== null) {
  //     formData.append("Image_Product", Image_Product);
  //   }
  //   await axios
  //     .post(
  //       "http://127.0.0.1:8000/api/Admin/Products/",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${auth.token}`,
  //         },
  //       } + id,
  //       formData
  //     )
  //     .then(({ data }) => {
  //       console.log(data);
  //       navigate("/Admin/Products");
  //     })
  //     .catch(({ response }) => {
  //       if (response.status === 422) {
  //         console.log(response.data.errors);
  //         setErrors(response.data.errors);
  //       } else {
  //         console.log(response.data.messages);
  //         console.log(response.data.errors);
  //       }
  //     });
  // };
  return (
    <>
      <div className="p-5 mt-10 bg-white rounded-2xl shadow-xl">
        <p className="text-center text-5xl border-b-4 border-green-600 pb-2 mb-10">
          Edit Product
        </p>
        <form onSubmit={updateProduct}>
          <div>
            <div className="mb-5 flex">
              <div className="w-3/5 mr-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  name
                </label>
                <input
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Errors.Name && (
                    <p className="text-red-500 text-sm italic">{Errors.Name}</p>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Errors.Ref && (
                    <p className="text-red-500 text-sm italic">{Errors.Ref}</p>
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
                name="image"
              />
              <div>
                {Errors.Image_Product && (
                  <p className="text-red-500 text-sm italic">
                    {Errors.Image_Product}
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
                name="description"
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
              <div>
                {Errors.Description && (
                  <p className="text-red-500 text-sm italic">
                    {Errors.Description}
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
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Errors.Price_Purchase && (
                    <p className="text-red-500 text-sm italic">
                      {Errors.Price_Purchase}
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
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Errors.Price_Sale && (
                    <p className="text-red-500 text-sm italic">
                      {Errors.Price_Sale}
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
                  onChange={(e) => setPriceOld(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Errors.Price_First && (
                    <p className="text-red-500 text-sm italic">
                      {Errors.Price_First}
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
                  onChange={(e) => setQuantier(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Errors.Quantity && (
                    <p className="text-red-500 text-sm italic">
                      {Errors.Quantity}
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
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Provider
              </label>
              <select
                value={Provider ? Provider : ""}
                name="provider_id"
                // defaultValue={Provider ? Provider : ""}
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
                {Errors.provider_id && (
                  <p className="text-red-500 text-sm italic">
                    {Errors.provider_id}
                  </p>
                )}
              </div>
            </div>
            <div className="my-4 flex justify-between">
              <div className=" ml-7">
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
                  value="Update Product"
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
