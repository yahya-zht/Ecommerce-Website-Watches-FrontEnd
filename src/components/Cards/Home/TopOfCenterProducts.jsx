import React, { useEffect, useState } from "react";
import { Product4 } from "./Cards/Product4";
// import image1 from "../../../assets/image/pexels-antony-trivet-9878594.jpg";
// import image2 from "../../../assets/image/pexels-antony-trivet-9979735.jpg";
// import image3 from "../../../assets/image/pexels-antony-trivet-9980831.jpg";
// import image4 from "../../../assets/image/pexels-antony-trivet-9981078.jpg";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

export default function TopOfCenterProducts() {
  const [Products, setProducts] = useState([]);

  function CountdownTimer() {
    // Set the target time for the countdown (10 hours from now)
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 10);

    // State to store remaining time
    const [remainingTime, setRemainingTime] = useState(
      calculateRemainingTime()
    );

    // Function to calculate remaining time
    function calculateRemainingTime() {
      const currentTime = new Date().getTime();
      return targetTime - currentTime;
    }

    // Update the remaining time every second
    useEffect(() => {
      const timerInterval = setInterval(() => {
        setRemainingTime(calculateRemainingTime());
      }, 1000);

      // Clear interval on component unmount
      return () => clearInterval(timerInterval);
    }, []);

    // Function to format time
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return (
      <span>
        {" "}
        {`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`}
      </span>
    );
  }

  useEffect(() => {
    try {
      fetch("http://127.0.0.1:8000/api/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.Products);
        });
    } catch {
      console.log("error");
    }
  }, []);
  const firstFourProducts = Products.slice(0, 4);
  const AllProducts = firstFourProducts.map((item) => (
    <div
      className="mx-2 w-1/4  hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
      key={item.id}
    >
      <Product4
        key={item.id}
        image={item.Image_Product}
        alt={item.Name}
        title={item.Name}
        star={faStar}
        // class="mx-2 w-1/4 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
        price={item.Price_Sale}
        priceold={item.Price_First}
        link={`/Product/${item.id}`}
        icon={faCartShopping}
      />
    </div>
  ));
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto">
        <hr className="bg-green-600 py-1 rounded-xl mb-5" />
        <div className="flex justify-between my-4 mx-6">
          <div>
            <p className="font-bold text-3xl">
              <span className="underline decoration-4 decoration-green-600">
                Today'
              </span>
              deals
            </p>
          </div>
          <div className="text-xl ">
            <div className="bg-green-600 px-6 py-2 text-xl font-semibold text-white">
              Ends in:{CountdownTimer()}
            </div>
          </div>
        </div>
        <div className="flex">{AllProducts}</div>
      </div>
    </div>
  );
}
