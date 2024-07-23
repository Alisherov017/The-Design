import { createBrowserRouter } from "react-router-dom";
import Designers from "../pages/designers/Designers";
import Error from "../error/Error";
import MainLayout from "./MainLayout";
import Jobs from "../pages/Jobss/Job";
import GoPro from "../pages/GoPro/GoPro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "designers", element: <Designers /> },
      { path: "jobs", element: <Jobs /> },
      { path: "gopro", element: <GoPro /> },
    ],
  },
]);

export default router;
