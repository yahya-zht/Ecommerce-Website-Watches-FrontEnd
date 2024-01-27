import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="mx-4">
        {/*  */}
        <div className="flex justify-between font-bold text-2xl mb-3">
          <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center">Orders Day</p>
            <p className="text-center">5</p>
          </div>

          <div className="flex flex-col w-1/3 mx-4 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center">Earnings This Day</p>
            <p className="text-center">$ 1850 </p>
          </div>
          <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center">Nombre Products in Stok</p>
            <p className="text-center">410</p>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between font-bold text-2xl mb-3">
          <div className="flex flex-col w-1/3  text-center justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center">Orders Week</p>
            <p className="text-center">370</p>
          </div>

          <div className="flex flex-col w-1/3 mx-4 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center">Earnings This Week</p>
            <p className="text-center">$ 5400 </p>
          </div>
          <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center">Nombre Customer</p>
            <p className="text-center">154</p>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between font-bold text-2xl mb-3">
          <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center">Orders Month</p>
            <p className="text-center">980</p>
          </div>

          <div className="flex flex-col w-1/3 mx-4 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center">Earnings This Month</p>
            <p className="text-center">$ 12087 </p>
          </div>
          <div className="flex flex-col w-1/3 justify-center p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center">Earnings This year</p>
            <p className="text-center">$ 142.011</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2 mr-4  p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center font-bold text-2xl border-b-4 pb-2 border-amber-500">
              New Message
            </p>
            <div>
              <p>Message 01</p>
              <p>Message 02</p>
              <p>Message 03</p>
            </div>
          </div>
          <div className="w-1/2 ml-4  p-3 rounded-xl border-4 border-amber-500 bg-white shadow-xl">
            <p className="text-center font-bold text-2xl border-b-4 pb-2 border-amber-500">
              Best Selling Products This Month
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
