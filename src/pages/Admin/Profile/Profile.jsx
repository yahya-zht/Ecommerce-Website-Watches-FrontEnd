import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const [UserProfile, setUserProfile] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    fetchUserProfile();
  }, []);
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Admin/userInfo`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setUserProfile(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-5 rounded-xl bg-white p-4">
      <div className="">
        <p className="">
          <span className="font-semibold">Name : </span> {UserProfile.name}
        </p>
        <p className="">
          <span className="font-semibold">Email : </span>
          {UserProfile.email}
        </p>
      </div>
      <div className="flex justify-end">
        <button>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="text-red-700 text-2xl"
          />
        </button>
      </div>
    </div>
  );
}
