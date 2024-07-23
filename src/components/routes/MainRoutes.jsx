import { createBrowserRouter } from "react-router-dom";
import Designers from "../pages/designers/Designers";
import Error from "../error/Error";
import MainLayout from "./MainLayout";
<<<<<<< HEAD
import Jobs from "../pages/Jobss/Job";
import GoPro from "../pages/GoPro/GoPro";
=======
import Login from "../../auth/login/Login";
import Register from "../../auth/register/Register";
>>>>>>> origin

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
<<<<<<< HEAD
    errorElement: <Error />,
    children: [
      { path: "designers", element: <Designers /> },
      { path: "jobs", element: <Jobs /> },
      { path: "gopro", element: <GoPro /> },
=======
    children: [
      { path: "/designers", element: <Designers /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
>>>>>>> origin
    ],
  },
]);

export default router;
