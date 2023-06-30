import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../navigation/Sidebar";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";

import Navigation from "../navigation/Navigation";

const DefaultLayout = () => {
  return (
    <div class="flex h-screen">
      <div className="">
        <Sidebar />
      </div>

      <div class="flex flex-1 flex-col">
        <div className="pb-1">
          <Navigation />
        </div>

        <div class="flex-1 overflow-y-auto bg-whiten bg-slate-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
