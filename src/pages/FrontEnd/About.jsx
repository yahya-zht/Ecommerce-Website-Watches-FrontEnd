import React from "react";
import NavBarFront from "../../components/NavBar/NavBarFront";
import FooterFront from "../../components/Footer/FooterFront";

export default function About() {
    return (
        <>
            <nav>
                <NavBarFront />
            </nav>
            <section>
                <h1 className="text-yellow-400 bg-green-700 text-3xl">PAGE About</h1>
            </section>
            <footer>
                <FooterFront/>
            </footer>
        </>
    );
}
