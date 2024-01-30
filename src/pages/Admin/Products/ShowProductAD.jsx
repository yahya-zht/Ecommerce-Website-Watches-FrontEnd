import {
  faCircleLeft,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function ShowProductAD() {
  const auth = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
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

        const { product } = response.data;
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product:", error);
        // Handle error appropriately, e.g., show an error message to the user
      }
    };

    fetchProduct();
  }, [id, auth.token]);
  const deleteProducts = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios
        .delete(`http://127.0.0.1:8000/api/Admin/Products/${id}`)
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
        <p className="mb-6">
          Name Product :{product.Name ? product.Name : "Name"}
        </p>
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
            src={
              product.Image_Product
                ? `http://127.0.0.1:8000/Storage/Images/product/${product.Image_Product}`
                : "Image"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
