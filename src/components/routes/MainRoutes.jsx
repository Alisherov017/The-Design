import { createBrowserRouter } from "react-router-dom";
import Designers from "../pages/designers/Designers";
import Error from "../error/Error";
import MainLayout from "./MainLayout";
import Register from "../../auth/Register";
import Login from "../../auth/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    errorElement: <Error />,
    element: <MainLayout />,
    children: [{ path: "/designers", element: <Designers /> }],
    children: [{ path: "/register", element: <Register /> }],
    children: [{ path: "/login", element: <Login /> }],
  },
]);
