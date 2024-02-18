import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ShowMessage() {
  const [Message, setMessage] = useState([]);
  const auth = useAuth();
  const { id } = useParams();
  useEffect(() => {
    fetchMessage();
  }, [auth.token]);
  const fetchMessage = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Admin/Messages/${id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setMessage(response.data.Message);
    } catch (error) {
      console.error(
        "Error fetching customers:",
        error.response?.data?.message || error.message
      );
    }
  };
  // const downloadFile = (id) => {
  //   window.open(
  //     `http://127.0.0.1:8000/api/Admin/Messages/${id}/download`,
  //         "_blank"

  //   );
  // };
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
  return (
    <div className="m-8 rounded-xl shadow-lg">
      <div className="p-4">
        <div className="flex ">
          <p>
            Name :
            {Message.Last_name
              ? Message.Last_name + " " + Message.First_name
              : "Loding..."}
          </p>
          <p className="ml-10">
            Date : {Message.created_at ? Message.created_at : "Loding..."}
          </p>
        </div>
        <div className="my-5">
          <p>Email :{Message.Email ? Message.Email : "Loding..."}</p>
        </div>
        <div className="flex flex-col">
          <p>Message :</p>
          <p>{Message.Message ? Message.Message : "Loding..."}</p>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-red-700 text-white font-semibold px-10 py-2 rounded-xl "
            onClick={() => downloadFile(Message.id)}
          >
            Pdf
          </button>
        </div>
      </div>
    </div>
  );
}
