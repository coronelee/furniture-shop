import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Services from "./components/Services.jsx";
import Furniture from "./components/Furniture.jsx";
import Review from "./components/Review.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <AboutUs />
    <Services />
    <Furniture />
    <Review />
    <Footer />
  </React.StrictMode>
);
