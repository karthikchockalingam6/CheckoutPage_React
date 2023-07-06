import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar";
import ProgressBar from "./components/ProgressBar";
import ShippingForm from "./components/ShippingForm";
import SummaryDetails from "./components/SummaryDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <ProgressBar />
    <ShippingForm />
    <SummaryDetails />
  </React.StrictMode>
);
