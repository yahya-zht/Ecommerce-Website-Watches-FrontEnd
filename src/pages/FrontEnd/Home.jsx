import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";
import TopPage from "../../components/Cards/Home/TopPage";
import TopOfCenter from "../../components/Cards/Home/TopOfCenter";
import TopOfCenterProducts from "../../components/Cards/Home/TopOfCenterProducts";
import CenterTop from "../../components/Cards/Home/CenterTop";
import CenterCenter from "../../components/Cards/Home/CenterCenter";
import CenterButtom from "../../components/Cards/Home/CenterButtom";
import Blog from "../../components/Cards/Home/Blog";

export default function Home() {
  return (
    <>
      <nav>
        <NavBarFront />
      </nav>
      <section className="bg-gray-100">
        <TopPage />
        <TopOfCenter />
        <TopOfCenterProducts />
        <CenterTop />
        <CenterCenter />
        <CenterButtom />
        <Blog />
      </section>
      <footer>
        <FooterFront />
      </footer>
    </>
  );
}
