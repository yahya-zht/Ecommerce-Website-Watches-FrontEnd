import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import ContactComponent from "../../components/ContactComponent";

export default function Contact() {
  return (
    <>
      <nav>
        <NavBarFront />
      </nav>
      <section className="">
        <ContactComponent />
      </section>
      <footer>
        <FooterFront />
      </footer>
    </>
  );
}
