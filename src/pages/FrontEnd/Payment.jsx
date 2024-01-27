import React, { useEffect, useState } from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import { useShoppingCart } from "../../context/ShoppingCart";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { cartItems, removeAllItemsFromCart } = useShoppingCart();

  const [Productss, setProductss] = useState([]);
  const [Error, setError] = useState([]);
  // const [TotalOrder, setTotalOrder] = useState(0);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Products")
      .then((response) => response.json())
      .then((data) => setProductss(data.Products));
  }, []);
  const ListProduct = [];
  const TotalOrder = cartItems.reduce((total, cartItems) => {
    const item = Productss.find((i) => i.id === cartItems.id);
    console.log(
      `id  ${cartItems.id}   => ${(item?.Price_Sale || 0) * cartItems.quantity}`
    );
    const O = {
      product_id: cartItems.id,
      Quantity: cartItems.quantity,
      Total_Price: (item?.Price_Sale || 0) * cartItems.quantity,
    };
    ListProduct.push(O);
    return total + (item?.Price_Sale || 0) * cartItems.quantity;
  }, 0);
  // console.log(TotalProduct);
  // console.log(TotalOrder);
  // console.log(cartItems);

  const [Name, setName] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const navigate = useNavigate();
  const CreateOrder = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Telephone", Telephone);
    formData.append("Address", Address);
    formData.append("Email", Email);
    formData.append("City", City);
    formData.append("Country", Country);
    formData.append("Total_Price", TotalOrder);
    // formData.append("ListProduct", ListProduct);
    const productListArray =
      typeof ListProduct === "string" ? JSON.parse(ListProduct) : ListProduct;
    // Append the array to the form data
    formData.append("ListProduct", JSON.stringify(productListArray));
    // Show formData =>
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    await axios
      .post("http://127.0.0.1:8000/api/Orders", formData)
      .then(({ data }) => {
        // console.log(data.status);
        console.log("Ok");
        removeAllItemsFromCart();
        navigate("/Products");
      })
      .catch(({ response }) => {
        if (response.status === 442) {
          console.log(response.data.errors);
          console.log("Error 404 ");
        } else {
          console.log("Error ");
          console.log(response.data);
          setError(response.data.errors);
        }
      });
  };
  return (
    <>
      <nav>
        <NavBarFront />
      </nav>
      <section className="max-w-screen-xl mx-auto">
        <div className="w-full bg-gray-50">
          <div className=" bg-white">
            <div>
              <p className="m-10 font-bold text-center text-6xl py-7 text-green-700 border-b-4 border-green-600">
                Order
              </p>
            </div>
            <div className="">
              <form onSubmit={CreateOrder} className="w-4/5 m-auto">
                <div className="flex ">
                  <div className="mb-5 w-1/2 mr-5">
                    <label
                      htmlFor="Name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={Name}
                      type="text"
                      id="Name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Your Name"
                      // required
                    />
                    <div>
                      {Error && (
                        <p className="text-red-500 text-sm italic">
                          {Error.Name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-5 w-1/2">
                    <label
                      htmlFor="Telephone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Telephone
                    </label>
                    <input
                      value={Telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      type="text"
                      id="Telephone"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Telephone"
                      // required
                    />
                    {Error && (
                      <p className="text-red-500 text-sm italic">
                        {Error.Telephone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="Email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                    type="email"
                    id="Email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="email@gmail.com"
                    // required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="Address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    id="Address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Address"
                    // required
                  />
                </div>
                <div className="flex ">
                  <div className="mb-5 w-1/2 mr-5">
                    <label
                      htmlFor="City"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City
                    </label>
                    <input
                      value={City}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      id="City"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="City"
                      // required
                    />
                    <div>
                      {Error && (
                        <p className="text-red-500 text-sm italic">
                          {Error.City}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-5 w-1/2">
                    <label
                      htmlFor="Country"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country
                    </label>
                    <input
                      value={Country}
                      onChange={(e) => setCountry(e.target.value)}
                      type="text"
                      id="Country"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Country"
                      // required
                    />
                    {Error && (
                      <p className="text-red-500 text-sm italic">
                        {Error.Country}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <input
                    type="submit"
                    value="Confirm Order"
                    className="px-10 py-3 text-white bg-green-600 rounded-xl font-bold hover:bg-amber-500 cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <FooterFront />
      </footer>
    </>
  );
}
