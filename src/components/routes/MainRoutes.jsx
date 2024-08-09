import { createBrowserRouter } from "react-router-dom";
import Designers from "../pages/designers/Designers";
import MainLayout from "./MainLayout";
import Jobs from "../pages/Jobss/Job";
import GoPro from "../pages/GoPro/GoPro";
import Login from "../../auth/login/Login";
import Register from "../../auth/register/Register";
import EditProfile from "../pages/userProfile/EditProfile";
import Profile from "../pages/userProfile/profile/Profile";
import Home from "../pages/home/Home";
import AddProduct from "../addProduct/AddProduct";
import Inspiration from "../pages/inspiration/Inspiration";
import DetailCard from "../ProductCard/detailCard/DetailCard";
import AlllUsers from "../pages/Allappli/Allluser";
import Error from "../error/Error";

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
      { path: "/", element: <Home /> },
      { path: "/addProduct", element: <AddProduct /> },
      { path: "/inspiration", element: <Inspiration /> },
      { path: "/designe/:id", element: <DetailCard /> },
      { path: "/allUsers", element: <AlllUsers /> },
    ],
  },
]);

export default router;
