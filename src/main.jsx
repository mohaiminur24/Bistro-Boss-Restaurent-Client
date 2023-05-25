import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Components/RouterLayout/Route";
import AuthContextLayout from "./Components/AuthContextLayout/AuthContextLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextLayout>
      <RouterProvider router={route} />
    </AuthContextLayout>
  </React.StrictMode>
);
