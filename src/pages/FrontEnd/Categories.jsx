import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import CategoriesComponent from "../../components/CategoriesComponent";

export default function Categories() {
  return (
    <>
      <nav>
        <NavBarFront />
      </nav>
      <section className="bg-gray-100">
        <CategoriesComponent />
      </section>
      <footer>
        <FooterFront />
      </footer>
    </>
  );
}
