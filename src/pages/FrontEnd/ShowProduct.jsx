import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import ShowProductCard from "../../components/ShowProductCard";
import TopPage from "../../components/Cards/Products/TopPage";

export default function ShowProduct() {
  return (
    <div>
      <nav>
        <NavBarFront />
      </nav>
      <section className="bg-gray-50">
        <div className="w-full   ">
          <div className="max-w-screen-xl mx-auto bg-white px-7 pt-2">
            <TopPage />
            <div className="">
              <ShowProductCard />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <FooterFront />
      </footer>
    </div>
  );
}
