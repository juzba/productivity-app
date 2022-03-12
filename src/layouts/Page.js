import React from "react";
import { Route, Routes } from "react-router-dom";
import ToDoApp from "../pages/ToDoApp";
import Timer from "../pages/Timer";
import Weather from "../pages/Weather";

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<ToDoApp />}></Route>
      <Route path="/timer" element={<Timer />}></Route>
      <Route path="/weather" element={<Weather />}></Route>
    </Routes>
  );
};

export default Page;