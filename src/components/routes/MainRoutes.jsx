import { createBrowserRouter } from "react-router-dom";
import Designers from "../pages/Designers";
import Error from "../error/Error";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    errorElement: <Error />,
    element: <MainLayout />,
    children: [{ path: "/designers", element: <Designers /> }],
  },
]);
