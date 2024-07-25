import { createBrowserRouter } from "react-router-dom";
import Designers from "../pages/designers/Designers";
import Error from "../error/Error";
import MainLayout from "./MainLayout";
import Jobs from "../pages/Jobss/Job";
import GoPro from "../pages/GoPro/GoPro";
// import Profile from "../pages/";
import Login from "../../auth/login/Login";
import Register from "../../auth/register/Register";
import Profile from "../pages/userProfile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "jobs", element: <Jobs /> },
      { path: "gopro", element: <GoPro /> },
      { path: "/designers", element: <Designers /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

export default router;
