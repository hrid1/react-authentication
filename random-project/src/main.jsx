import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Genareator from "./components/Genarator/Genareator";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Auth/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/genarator",
        element: (
          <PrivateRoute>
            <Genareator></Genareator>
          </PrivateRoute>
        ),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
