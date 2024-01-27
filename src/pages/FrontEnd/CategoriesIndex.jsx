import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import { Outlet } from "react-router-dom";

export default function CategoriesIndex() {
  return (
    <>
      <nav>
        <NavBarFront />
      </nav>
      <section className="bg-gray-100">
        <Outlet />
      </section>
      <footer>
        <FooterFront />
      </footer>
    </>
  );
}
