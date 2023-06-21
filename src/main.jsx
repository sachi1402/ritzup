import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js"; ***************************
import { RouterProvider } from "react-router-dom";

import router from "./configs/RConfig";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  {
    /* </React.StrictMode> */
  }
);
