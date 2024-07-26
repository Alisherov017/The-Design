import { createBrowserRouter } from "react-router-dom";
import Designers from "../pages/designers/Designers";
import Error from "../error/Error";
import MainLayout from "./MainLayout";
import Jobs from "../pages/Jobss/Job";
import GoPro from "../pages/GoPro/GoPro";
import Login from "../../auth/login/Login";
import Register from "../../auth/register/Register";
import EditProfile from "../pages/userProfile/EditProfile";
import Profile from "../pages/userProfile/profile/Profile";

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
      { path: "/editProfile", element: <EditProfile /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

export default router;
