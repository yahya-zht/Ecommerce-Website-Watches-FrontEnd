import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import ShoppingCartCompoents from "../../components/ShoppingCartCompoents";

export default function ShoppingCart() {
  return (
    <>
      <nav>
        <NavBarFront />
      </nav>
      <section className="">
        <div className="w-full bg-gray-50">
          <div className="max-w-screen-xl mx-auto bg-white">
            <div>
              <p className="m-10 font-bold text-center text-6xl py-7 text-green-700 border-b-4 border-green-600">
                Shopping cart
              </p>
            </div>
            <ShoppingCartCompoents />
          </div>
        </div>
      </section>
      <footer>
        <FooterFront />
      </footer>
    </>
  );
}
