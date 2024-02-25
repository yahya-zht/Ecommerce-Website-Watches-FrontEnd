import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearch } from "../../../context/Search";

export default function LeftPage() {
  const [Categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { setResultsSearch } = useSearch();
  useEffect(() => {
    const fetchSearch = async () => {
      const formData = new FormData();
      formData.append("list[]", selectedCategories);
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/Categories/search/Products`,
          { list: selectedCategories }
        );
        // const data = await response.json();
        console.log("response list => " + response.data.list);
        setResultsSearch(response.data.Products);
        console.log("response data => " + response.data.Products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSearch();
  }, [selectedCategories]);
  const handleCategoryChange = (e) => {
    const categoryId = parseInt(e.target.value);
    const isChecked = e.target.checked;

    if (isChecked) {
      // If checkbox is checked, add category to selected categories
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      // If checkbox is unchecked, remove category from selected categories
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    }
    console.log(selectedCategories);
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data : ", data.Categories);
        setCategories(data.Categories);
      });
  }, []);
  const category = Categories.map((item) => (
    <div>
      <input
        type="checkbox"
        className="mb-1 rounded-sm focus:ring-green-600 checked:bg-green-600"
        name="Rolex"
        id={item.Name}
        value={item.id}
        onClick={handleCategoryChange}
      />
      <label className="ml-2 font-bold text-m" htmlFor={item.Name}>
        {item.Name}
      </label>
    </div>
  ));
  return (
    <div className="hidden md:block w-1/4 bg-white m-4 p-2 rounded-md shadow-md">
      <div className="ml-2  ">
        <p className="font-bold text-xl my-1 ">Filter</p>
        <div className="ml-2">
          <div className="mt-1 ">
            <p className="font-bold text-l">Brands </p>
            <form action="#">
              <div className="flex flex-col ml-4">{category}</div>
            </form>
          </div>
          <div className="mt-3 border-t-4 pt-2">
            <p className="font-bold text-l">Type </p>
            <form action="#">
              <div className="flex flex-col ml-4">
                <div>
                  <input
                    type="checkbox"
                    className="mb-1 rounded-sm focus:ring-green-600 checked:bg-green-600"
                    name="Man"
                    id="Man"
                  />
                  <label className="ml-2 font-bold text-m" htmlFor="Man">
                    Man
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="mb-1 rounded-sm focus:ring-green-600 checked:bg-green-600"
                    name="Woman"
                    id="Woman"
                  />
                  <label className="ml-2 font-bold text-m" htmlFor="Woman">
                    Woman
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-3 border-t-4 pt-2">
            <p className="font-bold text-l">Collections</p>
            <form action="#">
              <div className="flex flex-col ml-4">
                <div>
                  <input
                    type="checkbox"
                    className="mb-1 rounded-sm focus:ring-green-600 checked:bg-green-600"
                    name="Classic"
                    id="Classic"
                  />
                  <label className="ml-2 font-bold text-m" htmlFor="Classic">
                    Classic
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="mb-1 rounded-sm  focus:ring-green-600 checked:bg-green-600"
                    name="Digital"
                    id="Digital"
                  />
                  <label className="ml-2 font-bold text-m" htmlFor="Digital">
                    Digital
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="mb-1 rounded-sm focus:ring-green-600 checked:bg-green-600"
                    name="Bluetooth"
                    id="Bluetooth"
                  />
                  <label className="ml-2 font-bold text-m" htmlFor="Bluetooth">
                    Bluetooth
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-3 border-t-4 pt-2">
            <p className="font-bold text-l">Price Range</p>
            <div className="w-11/12 m-auto">
              <form action="#">
                <input
                  type="range"
                  name="price"
                  id="price"
                  className="w-full text-green-600 bg-green-600"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
