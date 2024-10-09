import React from "react";
import logo from "../../assets/logo.png"
import { useState, Suspense } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { TbUserQuestion } from "react-icons/tb";
import { TbTicket } from "react-icons/tb";
import { PiPackageDuotone } from "react-icons/pi";
import { FiUserPlus } from "react-icons/fi";
import { TbMessagePlus } from "react-icons/tb";
import { RiVipDiamondLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import Navbar from "./Navbar"


const Layout = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [submenuopen, Setsubmenuopen] = useState(false);

  const Menus = [
    { title: "Dashboard", icon: <LuLayoutDashboard />, to: "/dashboard" },
    { title: "Institution", icon: <HiOutlineBuildingOffice2 />, to: "/insitution" },
    { title: "Leads", icon: <GoPeople />, to: "#" },
    { title: "Enquires", icon: <TbUserQuestion />, to: "/enquries" },
    { title: "Tickets", icon: <TbTicket />, to: "#" },
    { title: "Packages", icon: <PiPackageDuotone />, to: "#" },
    { title: "Users", icon: <FiUserPlus />, to: "#" },
    { title: "Interview", icon: <TbMessagePlus />, to: "#" },
    { title: "Subscription", icon: <RiVipDiamondLine />, to: "#" },
    { title: "Settings", icon: <TbSettings />, to: "#" },
  ];

  return (
    <div>
      <div className="w-full h-screen relative z-0  md:flex">
        <div
          className={` md:relative md:grid md:grid-rows-12 absolute transition-all duration-100 ${
            open ? "md:w-1/6 w-3/6 h-screen" : "md:w-1/12 "
          }`}
        >
          <TiThMenu
            className={`absolute top-4 right-2 cursor-pointer transition-transform text-2xl ${
              open ? "text-gray-400 " : "md:text-gray-400 text-black "
            }  `}
            onClick={() => setOpen(!open)}
            fontSize="small"
          />

          
            <img
              src={logo}
              alt="Image"
              className={`transition-all duration-500  ${
                open
                  ? "w-2/4 h-8 mt-10 ml-9 "
                  : "md:w-20 md:h-10 md:mt-12 md:ml-4 md:mr-5 w-9 h-9 mr-10"
              }`}
            />
        
          

          <div className="row-span-10 mt-9 ">
            <ul className="pt-3 ">
              {Menus.map((menu, index) => (
                <React.Fragment key={index}>
                  <NavLink to={menu.to}>
                    <li
                      className={` cursor-pointer text-md flex items-center  text-gray-500 font-medium pl-10 font-Source Sans Pro gap-x-3 p-3 mt-1  transition-all duration-700 hover:bg-blue-100 hover:text-blue-500  ${
                        location.pathname === menu.to
                          ? `${
                              open
                                ? "bg-select-sidebar  text-blue-500 transition-all duration-500"
                                : "md:bg-gray-200 md:text-primary md:transition-all md:duration-500 duration-75"
                            }`
                          : "text-gray-500  "
                      }`}
                    >
                      <div className="flex items-center gap-x-2">
                        <span
                          className={`md:block md:float-left ${
                            open
                              ? "md:text-2xl"
                              : "md:text-3xl md:ml-3 md:opacity-100 opacity-0"
                          }`}
                        >
                          <div className="text-xl">{menu.icon}</div>
                        </span>
                        <span
                          className={`font-Source Sans Pro text-lg font-normal flex-1 duration-300 ${
                            !open && "hidden"
                          }`}
                        >
                          {menu.title}
                        </span>
                      </div>
                    </li>
                  </NavLink>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`flex flex-col bg-background  no-scrollbar h-screen transition-all duration-300 px-10  overflow-hidden ${
            open ? "md:w-5/6 sm:w-full" : "md:w-11/12 sm:w-full"
          }`}
        >
         <Navbar/>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
