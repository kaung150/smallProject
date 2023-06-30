import React from "react";
import { Outlet } from "react-router-dom";

const GuessLayout = () => {
  return (
    <div>
      GuessLayout
      <Outlet />
    </div>
  );
};

export default GuessLayout;
