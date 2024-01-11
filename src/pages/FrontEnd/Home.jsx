import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import TopPage from "../../components/Cards/Home/TopPage";

export default function Home() {
  return (
    <>
      <nav>
        <NavBarFront />
      </nav>
      <section>
        <TopPage />
      </section>
      <footer>
        <FooterFront />
      </footer>
    </>
  );
}
