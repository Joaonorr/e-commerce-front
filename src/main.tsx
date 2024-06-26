import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/badges.css";
import "./styles/global.css";
import "./styles/home.css";
import "./styles/buttons.css";
import "./styles/pagination.css";
import "./styles/product.css";
import "./styles/shop.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Router />
  // </React.StrictMode>
);
