import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/test/Login/Login";
import Register from '../pages/test/Register/Register'
import Otp from "../pages/test/Otp/Otp";
import PropertyDetails from "../pages/test/Propertydetails/Propertydetails"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/otp",
    element: <Otp/>,
  },
  {
    path: "/Propertybetails",
    element:<PropertyDetails/>},
]);

export default router;
