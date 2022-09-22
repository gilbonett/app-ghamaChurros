import React from "react";
import IndividualIntervalsHeroImage from "../HeroImage/HeroImage";
import Navbar from "../Navbar/Navbar";
import './Footer.css';
import RedeSocial from "./RedeSocial/RedeSocial";

function Footer() {
    return(
        <>
        <Navbar/>
        <IndividualIntervalsHeroImage/>
        <div className="footer">
        <RedeSocial />
        </div>
        </>
    )
}

export default Footer
