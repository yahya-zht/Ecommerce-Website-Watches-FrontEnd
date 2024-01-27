import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Email, setEmail] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [Error, setError] = useState([]);
  useEffect(() => {
    fetchCustomer();
  }, []);
  const fetchCustomer = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/Customers/${id}`)
      .then(({ data }) => {
        console.log(data);
        const { name, telephone, email, City, Country } = data.Customer;
        setName(name);
        setTelephone(telephone);
        setEmail(email);
        setCity(City);
        setCountry(Country);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };

  const createCustomer = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", Name);
    formData.append("telephone", Telephone);
    formData.append("email", Email);
    formData.append("City", City);
    formData.append("Country", Country);
    await axios
      .post("http://127.0.0.1:8000/api/Customers", formData)
      .then(({ data }) => {
        console.log(data.status);
        console.log("Ok");
        navigate("/Admin/Customers");
      })
      .catch(({ response }) => {
        if (response.status === 442) {
          console.log(response.data.errors);
          console.log("Error 442 ");
        } else {
          console.log("Error");
          console.log(response.data);
          setError(response.data.errors);
        }
      });
  };

  return (
    <>
      <div className="p-5 mt-10 bg-white rounded-2xl shadow-xl">
        <p className="text-center text-5xl border-b-4 border-green-600 pb-2 mb-10">
          Edit Customer
        </p>
        <form onSubmit={createCustomer} encType="multipart/form-data">
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
                    <p className="text-red-500 text-sm italic">{Error.name}</p>
                  )}
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="mr-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Telephone
                </label>
                <input
                  value={Telephone}
                  name="NumberProducts"
                  onChange={(e) => setTelephone(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">
                      {Error.telephone}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-3/5 mr-2">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">{Error.email}</p>
                )}
              </div>
            </div>
            <div className="w-3/5 mr-2">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                value={City}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                id="base-input"
                // name="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">{Error.City}</p>
                )}
              </div>
            </div>
            <div className="w-3/5 mr-2">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <input
                value={Country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                id="base-input"
                // name="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">{Error.Country}</p>
                )}
              </div>
            </div>
            <div className="my-4 flex justify-between">
              <div className=" ml-7 ">
                <Link
                  to={`/Admin/Customers`}
                  className="text-5xl flex items-center text-amber-500  hover:text-red-600 "
                >
                  <FontAwesomeIcon icon={faCircleLeft} />
                </Link>
              </div>
              <div>
                <input
                  type="submit"
                  value="Add Customer"
                  className="px-16 py-3 rounded-xl bg-green-600 text-white cursor-pointer hover:bg-amber-600 font-semibold"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
