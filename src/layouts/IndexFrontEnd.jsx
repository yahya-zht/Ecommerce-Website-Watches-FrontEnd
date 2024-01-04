import React from "react";
import NavBarFront from "../components/NavBar/NavBarFront";
import FooterFront from "../components/Footer/FooterFront";
import Routers from "../routes/Routers";

export default function IndexFrontEnd() {
    return (
        <>
            <nav>
                <NavBarFront />
            </nav>
            <section>
                <Routers />
            </section>
            <footer>
                <FooterFront />
            </footer>
        </>
    );
}
