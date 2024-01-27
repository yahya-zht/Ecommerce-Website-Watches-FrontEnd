import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ShowOrder() {
  const { id } = useParams();
  const [Order, setOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchOrder();
    console.log("okokok");
  }, []);
  const fetchOrder = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/Orders/${id}`)
      .then(({ data }) => {
        console.log(data.Order.products);
        setOrder(data.Order);
      });
  };
  const deleteOrder = async (id) => {
    if (window.confirm("Are you sure you want to delete this Order?")) {
      await axios
        .delete(`http://127.0.0.1:8000/api/Orders/${id}`)
        .then(({ data }) => {
          console.log(data.message);
          navigate("/Admin/Orders");
        })
        .catch(({ response: { data } }) => {
          console.log(data.message);
        });
    }
  };
  const dateCreate = new Date(Order.updated_at);
  const yearCreate = dateCreate.getFullYear();
  const monthCreate = dateCreate.getMonth() + 1;
  const dayCreate = dateCreate.getDate();
  const dtCreate = yearCreate + "-" + monthCreate + "-" + dayCreate;
  return (
    <>
      <nav className="rounded-xl p-3 mb-2 shadow-xl bg-white">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p>
              <div className="m-2 ">
                <Link
                  to={`/Admin/Orders`}
                  className="text-2xl  flex items-center text-amber-500  hover:text-red-600 "
                >
                  <FontAwesomeIcon icon={faCircleLeft} />
                </Link>
              </div>
            </p>
            <p>
              <div className="m-2">
                <Link
                  onClick={() => deleteOrder(Order.id)}
                  to="#"
                  className="font-medium text-2xl flex items-center text-red-700 dark:text-blue-500 hover:underline hover:text-red-600"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </div>
            </p>
          </div>
          <div className="flex flex-col font-medium">
            <div className="flex justify-between">
              <p className="w-1/3">
                <span>Ref Order : </span>
                {Order.Ref}
              </p>
              <p className="w-1/3">
                <span>Total Price Order : </span>
                {Order.Total_Price}
              </p>
              <p className="w-1/3">
                <span>Date Order : </span>
                {dtCreate ? dtCreate : "DATE"}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/3">
                <span>Name Customer : </span>
                {Order.Name}
              </p>
              <p className="w-1/3">
                <span>Email Customer : </span>
                {Order.Email}
              </p>
              <p className="w-1/3">
                <span>Telephone Customer : </span>
                {Order.Telephone}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/3">
                <span>Address Customer : </span>
                {Order.Address}
              </p>
              <p className="w-1/3">
                <span>City Customer : </span>
                {Order.City}
              </p>
              <p className="w-1/3">
                <span>Country Customer : </span>
                {Order.Country}
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-bold uppercase bg-black text-white dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="p-2">
                Image Product
              </th>
              <th scope="col" className="px-2 py-2">
                Name Product
              </th>
              <th scope="col" className="px-2 py-2">
                Ref Product
              </th>
              <th scope="col" className="p-2">
                Price One Sale
              </th>
              <th scope="col" className="p-2">
                Quantity
              </th>
              <th scope="col" className="p-2">
                Total Price one Product
              </th>
            </tr>
          </thead>
          <tbody>
            {Order.products
              ? Order.products.map((Product) => (
                  <tr
                    className="bg-white text-sm dark:bg-gray-800 text-center hover:bg-amber-50 dark:hover:bg-gray-600"
                    key={Product.id}
                  >
                    <th
                      scope="row"
                      className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="w-full h-20 m-auto flex justify-center items-center">
                        <img
                          className="max-w-12 h-min"
                          src={`http://127.0.0.1:8000/Storage/Images/product/${Product.Image_Product}`}
                          alt=""
                        />
                      </div>
                    </th>
                    <td className=" ">{Product.Name}</td>
                    <td className=" ">{Product.Ref}</td>
                    <td className=" ">{Product.Price_Sale}</td>
                    <td className=" ">{Product.pivot.Quantity}</td>
                    <td className=" ">{Product.pivot.Total_Price}</td>
                  </tr>
                ))
              : "Loading"}
          </tbody>
        </table>
      </div>
    </>
  );
}
