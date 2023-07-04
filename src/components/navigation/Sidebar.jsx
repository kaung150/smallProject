import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import { BsFillCreditCardFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const showSidebar = () => setSidebar(!sidebar);
  const { sidebar, setSidebar } = useStateContext();
  return (
    <div
      className={`w-[230px] h-[500px] fixed lg:static py-3 transition-all duration-500  px-2  overflow-y-auto`}
      style={{
        left: sidebar ? 0 : "-100%",
        transition: "350ms",
        zIndex: 10,
      }}
    >
      <div>
        <AiIcons.AiOutlineClose
          onClick={showSidebar}
          size={25}
          className=" float-right mr-3 mt-4  lg:hidden text-white border rounded py-1"
        />
      </div>

      <div className="text-slate-100 flex items-center gap-2 ml-5">
        <BsFillCreditCardFill size={30} className="" />
        <p className="text-3xl  font-poppinsSemiBold">Manager</p>
      </div>

      <div className="mt-16 ">
        <h2 className="text-slate-400 text-sm font-poppinsSemiBold ml-6">
          MENU
        </h2>
        {SidebarData.map((item, index) => (
          <Submenu item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
