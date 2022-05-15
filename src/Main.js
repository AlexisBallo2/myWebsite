import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Portfolio from "./Portfolio";

const Main = () => {
  return (
    <Routes>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/home" element={<HomePage />}></Route>
      <Route exact path="/portfolio" element={<Portfolio />}></Route>
    </Routes>
  );
};

export default Main;
