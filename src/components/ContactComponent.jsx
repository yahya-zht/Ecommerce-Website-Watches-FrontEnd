import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactComponent() {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [MessageSend, setMessageSend] = useState("");
  const [Error, setError] = useState([]);

  const CreateMessage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("First_name", FirstName);
    formData.append("Last_name", LastName);
    formData.append("Email", Email);
    formData.append("Message", Message);
    try {
      const url = "http://127.0.0.1:8000/api/Message";
      const recponse = await axios.post(url, formData);
      console.log(recponse.data);
      setMessageSend(recponse.data.Status);
      setFirstName("");
      setEmail("");
      setLastName("");
      setMessage("");
      navigate("/Contact");
    } catch (error) {
      console.error(
        "Error creating Message:",
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

  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto">
        <div>
          {MessageSend ? (
            <div>
              <div
                id="alert-border-3"
                className="flex items-center w-2/3 mx-auto p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div className="ms-3 text-sm font-medium">{MessageSend}</div>
              </div>
            </div>
          ) : (
            ""
          )}
          <p className="m-10 font-bold text-center text-6xl py-7 text-green-700 border-b-4 border-green-600">
            Contact us
          </p>
        </div>
        <div className="px-72 ">
          <form onSubmit={CreateMessage}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-green-600 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
