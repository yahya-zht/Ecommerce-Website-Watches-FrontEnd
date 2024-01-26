import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const CartShopping = (props) => {
  const [Product, setProduct] = useState([]);
  const [Total, setTotal] = useState(0);
  const { removeItemFromCart } = useShoppingCart();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/Products/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
        // console.log(data.product);
      });
  }, [props.id]);

  useEffect(() => {
    setTotal(Product.Price_Sale * props.Quantity);
  }, [Product.Price_Sale, props.Quantity]);
  return (
    <tr class="border-b dark:border-gray-700" key={props.id}>
      <th
        scope="row"
        class="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-12 flex justify-center">
          <img
            className="h-full"
            src={`http://127.0.0.1:8000/Storage/Images/product/${Product.Image_Product}`}
            alt=""
          />
        </div>
      </th>
      <th
        scope="row"
        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <p>{Product.Name ? Product.Name : ""}</p>
      </th>
      <td class="px-4 py-3">{props.Quantity}</td>
      <td class="px-4 py-3">{Product.Price_Sale ? Product.Price_Sale : ""}</td>
      <td class="px-4 py-3 to" id={Product.id}>
        {Total}
      </td>
      <td class="px-4 py-3">
        <button onClick={() => removeItemFromCart(Product.id)}>
          <FontAwesomeIcon icon={faTrash} className="text-red-600" />
        </button>
      </td>
    </tr>
  );
};
