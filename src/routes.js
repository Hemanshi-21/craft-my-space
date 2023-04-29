import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import HouseSize from "./pages/houseSize/houseSize"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="house-size" element={<HouseSize />} />
    </Route>
  )
);

export default router;
