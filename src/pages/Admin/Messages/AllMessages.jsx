import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFileImport,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function AllMessages() {
  const auth = useAuth();
  const [Messages, setMessages] = useState([]);
  const [Error, setError] = useState();

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/Admin/Messages",
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setMessages(response.data.Messages);
    } catch (error) {
      console.error(
        "Error fetching customers:",
        error.response?.data?.message || error.message
      );
    }
  };
  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      await axios
        .delete(`http://127.0.0.1:8000/api/Admin/Messages/${id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then(({ data }) => {
          console.log(data.Status);
          fetchMessages();
        })
        .catch(({ response: { data } }) => {
          console.log(data.Status);
        });
    }
  };
  const downloadFile = (id) => {
    axios
      .get(`http://127.0.0.1:8000/api/Admin/Messages/${id}/download`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
        responseType: "blob", // Important: responseType must be 'blob' to handle binary data
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "invoice.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  };
  const ShowAllMessages = Messages.map((Message) => (
    <tr
      className="bg-white text-sm dark:bg-gray-800 text-center hover:bg-amber-50 dark:hover:bg-gray-600"
      key={Message.id}
    >
      <td
        scope="row"
        className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {Message.First_name}
      </td>
      <td
        scope="row"
        className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {Message.Last_name}
      </td>
      <td className=" ">{Message.Email}</td>
      <td className=" ">{Message.Message}</td>
      <td className="px-4  text-right">
        <div className="flex justify-between text-xl">
          <Link
            to={`Show/${Message.id}`}
            className="font-medium text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>
          <button onClick={() => downloadFile(Message.id)}>
            <FontAwesomeIcon
              className="text-red-700 hover:text-red-500"
              icon={faFileImport}
            />
          </button>
          <Link
            onClick={() => deleteMessage(Message.id)}
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
        <h1>Welcome! {auth.user ? auth.user : "ok"}</h1>
        {/* <NavSectionAdmin href="Create" Link="Add Product" /> */}
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-bold uppercase bg-black text-white dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-2 py-2">
                First Name
              </th>
              <th scope="col" className="p-2 ">
                Last Name
              </th>
              <th scope="col" className="p-2">
                Email
              </th>
              <th scope="col" className="p-2">
                Message
              </th>
              <th scope="col" className="p-2 text-center w-44 ">
                <span className="">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>{ShowAllMessages}</tbody>
        </table>
      </div>
    </>
  );
}
