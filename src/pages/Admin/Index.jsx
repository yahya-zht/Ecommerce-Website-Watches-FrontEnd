import React from "react";
import NavAdmin from "../../components/Admin/NavAdmin";
import { Outlet } from "react-router-dom";
import "../../styles/AdminStyle.css";
export default function Index() {
  return (
    <>
      <div className="w-full flex min-h-screen">
        <nav className="w-1/5 bg-blue-950 p-2 shadow-2xl flex flex-col justify-between min-h-screen fixed text-white ">
          <NavAdmin />
        </nav>
        <section className="w-4/5 ml-auto bg-gray-50 p-2">
          <div className="rounded-xl my-2 shadow-xl  h-full flex flex-col justify-start">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
}
