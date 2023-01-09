import React from "react";
import NavBar from "../components/NavBar";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className="infoSite">
        <div className="infoImage">
          <img
            src="https://via.placeholder.com/300x400/100"
            alt="Placeholder"
          />
        </div>
        <div className="infoBox">
          <p>Christian Nielsen</p>
          <div className="typewriter">
            <h2>Jeg er webudvikler</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
