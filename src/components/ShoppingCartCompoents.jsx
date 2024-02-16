import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCart";
import { CartShopping } from "./Cards/CartShopping";
import { useEffect, useState } from "react";

export default function ShoppingCartCompoents() {
  const { cartItems, removeAllItemsFromCart } = useShoppingCart();
  const [Productss, setProductss] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProductss(data.Products));
  }, []);

  const Products = cartItems.map((item) => {
    return <CartShopping id={item.id} Quantity={item.quantity} />;
  });

  return (
    <section className=" dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-amber-400 uppercase bg-green-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Product Image
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Price one
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Total Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {Products}
                <tr className="border-b dark:border-gray-700">
                  <th
                    colSpan={4}
                    scope="row"
                    className="pl-20 py-3 font-bold  text-black text-xl text-center whitespace-nowrap dark:text-white "
                  >
                    Total
                  </th>

                  <td className="px-4 py-3 font-bold text-black">
                    {cartItems.reduce((total, cartItems) => {
                      const item = Productss.find((i) => i.id === cartItems.id);
                      return (
                        total + (item?.Price_Sale || 0) * cartItems.quantity
                      );
                    }, 0)}
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={removeAllItemsFromCart}>Remove All</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <Link
              to="/Order"
              className="px-10 py-3 bg-green-600 hover:bg-amber-600 text-white font-bold m-2 rounded-xl "
            >
              Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
