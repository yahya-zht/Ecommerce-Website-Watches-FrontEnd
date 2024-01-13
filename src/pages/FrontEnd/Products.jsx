import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import Index from "../../components/Cards/Products";

export default function Products() {
  return (
    <>
      <nav>
        <NavBarFront />
      </nav>
      <section>
        <Index />
      </section>
      <footer>
        <FooterFront />
      </footer>
    </>
  );
}
