import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import HouseSize from "./pages/houseSize/HouseSize";
import HousePlan from "./pages/housePlan/HousePlan";
import HousePlanDetails from "./pages/housePlanDetails/HousePlanDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="house-size" element={<HouseSize />} />
      <Route path="house-plan" element={<HousePlan />} />
      <Route path="house-plan-details" element={<HousePlanDetails />} />
    </Route>
  )
);

export default router;
