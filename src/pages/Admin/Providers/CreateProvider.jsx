import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function CreateProvider() {
  const navigate = useNavigate();
  const [Ref, setRef] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState();
  const [Country, setCountry] = useState();
  const [error, seterror] = useState([]);
  const auth = useAuth();
  const createProvider = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Ref", Ref);
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Telephone", Telephone);
    formData.append("Address", Address);
    formData.append("City", City);
    formData.append("Country", Country);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/Admin/Providers",
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      console.log("Provider created successfully:", response.data.status);
      navigate("/Admin/Providers");
    } catch (error) {
      console.error(
        "error creating provider:",
        error.response?.data || error.message
      );

      if (error.response) {
        console.log("Validation errors:", error.response.data.errors);
        seterror(error.response.data.errors);
      } else if (error.response.status === 442) {
        console.log("error: 442 ");
      } else {
        console.log("Other error:", error.response?.data);
        seterror("An error occurred while creating the provider.");
      }
    }
  };

  // const createProvider = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("Ref", Ref);
  //   formData.append("Name", Name);
  //   formData.append("Email", Email);
  //   formData.append("Telephone", Telephone);
  //   formData.append("Address", Address);
  //   formData.append("City", City);
  //   formData.append("Country", Country);
  //   await axios
  //     .post("http://127.0.0.1:8000/api/Admin/Providers", formData, {
  //       headers: {
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(({ data }) => {
  //       console.log(data.status);
  //       console.log("Ok");
  //       navigate("/Admin/Providers");
  //     })
  //     .catch(({ response }) => {
  //       if (response.status === 442) {
  //         console.log(response.data.errors);
  //       } else {
  //         console.log(response.data);
  //         seterror(response.data.errors);
  //       }
  //     });
  // };

  return (
    <>
      <div className="p-5 mt-10 bg-white rounded-2xl shadow-xl">
        <p className="text-center text-5xl border-b-4 border-green-600 pb-2 mb-10">
          Provider New
        </p>
        <form onSubmit={createProvider} encType="multipart/form-data">
          <div>
            <div className="mb-5 flex">
              <div className="w-3/5 mr-2">
                <label
                  htmlFor="Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="Name"
                  name="Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {error && (
                    <p className="text-red-500 text-sm italic">{error.Name}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-3/5 mr-2">
              <label
                htmlFor="ref"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ref
              </label>
              <input
                value={Ref}
                onChange={(e) => setRef(e.target.value)}
                type="text"
                id="Ref"
                name="ref"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {error && (
                  <p className="text-red-500 text-sm italic">{error.Ref}</p>
                )}
              </div>
            </div>
            <div className="w-3/5 mr-2">
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="Email"
                name="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {error && (
                  <p className="text-red-500 text-sm italic">{error.Email}</p>
                )}
              </div>
            </div>
            <div className="w-3/5 mr-2">
              <label
                htmlFor="Telephone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Telephone
              </label>
              <input
                value={Telephone}
                onChange={(e) => setTelephone(e.target.value)}
                type="text"
                id="Telephone"
                name="Telephone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {error && (
                  <p className="text-red-500 text-sm italic">
                    {error.Telephone}
                  </p>
                )}
              </div>
            </div>
            <div className="w-3/5 mr-2">
              <label
                htmlFor="Address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="Address"
                name="Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {error && (
                  <p className="text-red-500 text-sm italic">{error.Address}</p>
                )}
              </div>
            </div>
            <div className="flex ">
              <div className="mr-2 w-1/3">
                <label
                  htmlFor="City"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  value={City}
                  name="City"
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="City"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {error && (
                    <p className="text-red-500 text-sm italic">{error.City}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="mr-2 w-1/3">
                <label
                  htmlFor="Country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <input
                  value={Country}
                  name="Country"
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  id="Country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {error && (
                    <p className="text-red-500 text-sm italic">
                      {error.Country}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="my-4 flex justify-between">
              <div className=" ml-7 ">
                <Link
                  to={`/Admin/Providers`}
                  className="text-5xl flex items-center text-amber-500  hover:text-red-600 "
                >
                  <FontAwesomeIcon icon={faCircleLeft} />
                </Link>
              </div>
              <div>
                <input
                  type="submit"
                  value="Add Provider"
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
