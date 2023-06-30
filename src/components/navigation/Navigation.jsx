import React from "react";
import { Link } from "react-router-dom";

import { CgMenuGridO } from "react-icons/cg";
import { useStateContext } from "../../contexts/ContextProvider";
import { IoIosNotificationsOutline } from "react-icons/io";

import Switch from "./Switch";

const Navigation = () => {
  const { sidebar, setSidebar, isDark } = useStateContext();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div
        className={` py-4 flex  justify-between  items-center md:justify-between  px-5 ${
          isDark ? "bg-[#2a2b32] text-white" : ""
        }`}
      >
        <button onClick={(ev) => showSidebar(ev)} className="">
          <CgMenuGridO size={24} className="lg:hidden" />
        </button>

        <div className="flex items-center gap-4">
          <Link className=" rounded-full p-1 bg-slate-100">
            <IoIosNotificationsOutline size={22} className="text-blue-800" />
          </Link>

          <Switch />

          <Link className=" rounded-full flex gap-2">
            <div>
              <p className="text-sm">The Real Deal</p>
              <p className="text-xs font-light text-slate-500">Web Developer</p>
            </div>
            <img
              src="assets/img/profile.jpg"
              className="h-10 w-10 rounded-full"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
