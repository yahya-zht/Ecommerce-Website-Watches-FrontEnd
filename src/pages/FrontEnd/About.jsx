import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import AboutComponent from "../../components/AboutComponent";

export default function About() {
  return (
    <>
      <nav>
        <NavBarFront />
      </nav>
      <section>
        <AboutComponent />
      </section>
      <footer>
        <FooterFront />
      </footer>
    </>
  );
}
