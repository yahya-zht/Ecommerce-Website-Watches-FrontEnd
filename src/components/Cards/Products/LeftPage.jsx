import React from "react";

export default function LeftPage() {
  return (
    <div className="hidden md:block w-1/4 bg-white m-4 p-2 rounded-md shadow-md">
      <div className="ml-2">
        <p className="font-bold text-xl my-1">Filter</p>
        <div className="ml-2">
          <div className="mt-1 ">
            <p className="font-bold text-l">Brands </p>
            <form action="#">
              <div className="flex flex-col ml-4">
                <div>
                  <input
                    type="checkbox"
                    className="mb-1 rounded-sm focus:ring-green-600 checked:bg-green-600"
                    name="Rolex"
                    id="Rolex"
                  />
                  <label className="ml-2 font-bold text-m" htmlFor="Rolex">
                    Rolex
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="mb-1 rounded-sm focus:ring-green-600 checked:bg-green-600 "
                    name="Casio"
                    id="Casio"
                  />
                  <label className="ml-2 font-bold text-m" htmlFor="Casio">
                    Casio
                  </label>
                </div>
                <div>
                  <input
                    className="mb-1 rounded-sm focus:ring-green-600 checked:bg-green-600 "
                    type="checkbox"
                    name="Omega"
                    id="Omega"
                  />
                  <label className="ml-2 font-bold text-m" htmlFor="Omega">
                    Omega
                  </label>
                </div>
                <div>
                  <input
                    className="mb-1 rounded-sm focus:ring-green-600 checked:bg-green-600"
                    type="checkbox"
                    name="Polex"
                    id="Polex"
                  />
                  <label className="ml-2 font-bold text-m" htmlFor="Polex">
                    Polex
                  </label>
                </div>
              </div>
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
