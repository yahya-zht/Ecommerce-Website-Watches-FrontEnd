import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardsProduct } from "../../components/Cards/Products/CardsProduct";
import { useShoppingCart } from "../../context/ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function ShowCategory() {
  const { id } = useParams();
  const [Products, setProducts] = useState([]);
  const [Category, setCategory] = useState("");
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/categories/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.Productes);
        setCategory(data.Category);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { incrementItemQuantity } = useShoppingCart();

  const ShowProducts = Products.map((product) => (
    <div key={product.id}>
      <CardsProduct
        ic={() => incrementItemQuantity(product.id)}
        key={product.id}
        image={product.Image_Product}
        title={product.Name}
        price={product.Price_Sale}
        priceold={product.Price_First}
        link={`/Product/${product.id}`}
        star
      />
    </div>
  ));
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-2">
          <div className="flex bg-white rounded-xl shadow-md p-2 justify-between items-center pr-8">
            <div className=" ml-7 ">
              <Link
                to={`/Categories`}
                className="text-5xl flex items-center text-amber-500  hover:text-red-600 "
              >
                <FontAwesomeIcon icon={faCircleLeft} />
              </Link>
            </div>
            <p className="font-semibold text-2xl">{Category}</p>
          </div>
        </div>
        {/* <div className="w-full md:w-3/4 m-2"> */}
        <div className="grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3 gap-2">
          {ShowProducts}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
