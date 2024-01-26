import {
  faCircleLeft,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ShowProductAD() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/Products/${id}`)
      .then(({ data }) => {
        console.log(data.product);
        setProduct(data.product);
      });
  };
  const deleteProducts = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios
        .delete(`http://127.0.0.1:8000/api/Products/${id}`)
        .then(({ data }) => {
          console.log(data.message);
          // fetchProducts();
          navigate("/Admin/Products");
        })
        .catch(({ response: { data } }) => {
          console.log(data.message);
        });
    }
  };
  // const created_at = product.created_at;
  // const updated_at = product.updated_at;
  const dateCreate = new Date(product.created_at);
  const dateEdit = new Date(product.updated_at);
  const yearCreate = dateCreate.getFullYear();
  const monthCreate = dateCreate.getMonth() + 1;
  const dayCreate = dateCreate.getDate();
  const yearEdit = dateEdit.getFullYear();
  const monthEdit = dateEdit.getMonth() + 1;
  const dayEdit = dateEdit.getDate();
  const dtCreate = yearCreate + "-" + monthCreate + "-" + dayCreate;
  const dtUpdate = yearEdit + "-" + monthEdit + "-" + dayEdit;

  return (
    <div className="flex p-4 items-center bg-white rounded-xl shadow-xl mt-10">
      <div className="flex w-4/5 flex-col justify-between m-5 font-semibold text-2xl">
        <p className="mb-6">Name Product :{product.Name} </p>
        <p className="mb-6">Ref : {product.Ref} </p>
        <p className="mb-6">Description : {product.Description}</p>
        <div className="flex mb-6">
          <p className="w-1/3 ">Price Purchase :{product.Price_Purchase} </p>
          <p className="w-1/3">Price Old :{product.Price_First} </p>
          <p className="w-1/3">Price sale :{product.Price_Sale} </p>
        </div>
        <p className="mb-6">
          Provider : {product.provider ? product.provider.Name : "N/A"}
        </p>
        <div className="flex mb-6">
          <p className="w-1/2">Sales : {product.Sales}</p>
          <p className="w-1/2">Quantitey :{product.Quantity} </p>
        </div>
        <div className="flex mb-6 ">
          <p className="w-1/2">Date Create : {dtCreate}</p>
          <p className="w-1/2">Date Update :{dtUpdate}</p>
        </div>
        <div className="flex justify-around mb-2 mt-8">
          <Link to={`/Admin/Products`}>
            <FontAwesomeIcon
              icon={faCircleLeft}
              className="text-5xl text-green-600 flex items-center hover:text-amber-600 "
            />
          </Link>
          <Link
            to={`/Admin/Products/Edit/${product.id}`}
            className="font-medium text-4xl text-green-600 dark:text-blue-500 hover:underline hover:text-amber-600 flex items-center"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          <Link
            onClick={() => deleteProducts(product.id)}
            to="#"
            className="font-medium text-4xl flex items-center text-red-700 dark:text-blue-500 hover:underline hover:text-red-600"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Link>
        </div>
      </div>

      <div className="w-1/5">
        <div className="">
          <img
            src={`http://127.0.0.1:8000/Storage/Images/product/${product.Image_Product}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
