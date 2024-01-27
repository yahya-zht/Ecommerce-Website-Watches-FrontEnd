import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProvider() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Ref, setRef] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState();
  const [Country, setCountry] = useState();
  const [Error, setError] = useState([]);
  useEffect(() => {
    fetchProvider();
  }, []);
  const fetchProvider = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/Providers/${id}`)
      .then(({ data }) => {
        console.log(data);
        const { Name, Ref, Email, Telephone, Address, City, Country } =
          data.Provider;
        setName(Name);
        setRef(Ref);
        setEmail(Email);
        setTelephone(Telephone);
        setAddress(Address);
        setCity(City);
        setCountry(Country);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };
  const EditProvider = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("Ref", Ref);
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Telephone", Telephone);
    formData.append("Address", Address);
    formData.append("City", City);
    formData.append("Country", Country);
    await axios
      .post(`http://127.0.0.1:8000/api/Providers/${id}`, formData)
      .then(({ data }) => {
        console.log(data.status);
        navigate("/Admin/Providers");
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
          Edit Provider
        </p>
        <form onSubmit={EditProvider}>
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
            <div className="w-3/5 mr-2">
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
                // name="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">{Error.Ref}</p>
                )}
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
                type="text"
                id="base-input"
                // name="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">{Error.Email}</p>
                )}
              </div>
            </div>
            <div className="w-3/5 mr-2">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Telephone
              </label>
              <input
                value={Telephone}
                onChange={(e) => setTelephone(e.target.value)}
                type="text"
                id="base-input"
                // name="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">
                    {Error.Telephone}
                  </p>
                )}
              </div>
            </div>
            <div className="w-3/5 mr-2">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="base-input"
                // name="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div>
                {Error && (
                  <p className="text-red-500 text-sm italic">{Error.Address}</p>
                )}
              </div>
            </div>
            <div className="flex ">
              <div className="mr-2 w-1/3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  value={City}
                  name="Country"
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">{Error.City}</p>
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
                  Country
                </label>
                <input
                  value={Country}
                  name="Country"
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>
                  {Error && (
                    <p className="text-red-500 text-sm italic">
                      {Error.Country}
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
                  value="Update Provider"
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
