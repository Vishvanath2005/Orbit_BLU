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
import Navbar from "../layout/Navbar"


const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [submenuopen, Setsubmenuopen] = useState(false);

  const Menus = [
    { title: "Dashboard", icon: <LuLayoutDashboard />, to: "#" },
    { title: "Insitution", icon: <HiOutlineBuildingOffice2 />, to: "#" },
    { title: "Leads", icon: <GoPeople />, to: "#" },
    { title: "Enquires", icon: <TbUserQuestion />, to: "#" },
    { title: "Tickets", icon: <TbTicket />, to: "#" },
    { title: "Packages", icon: <PiPackageDuotone />, to: "#" },
    { title: "Users", icon: <FiUserPlus />, to: "#" },
    { title: "Interview", icon: <TbMessagePlus />, to: "#" },
    { title: "Subscription", icon: <RiVipDiamondLine />, to: "#" },
    { title: "Settings", icon: <TbSettings />, to: "#" },
  ];

  return (
    <div>
      <div className="w-full h-screen relative z-0 md:flex">
        <div
          className={` md:relative md:grid md:grid-rows-12 absolute   transition-all duration-100 ${
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
              className={`transition-all duration-500 mt-5  ${
                open
                  ? "w-2/3 h-10 mt-1 ml-6 "
                  : "md:w-20 md:h-10 md:mt-12 md:ml-4 md:mr-5 w-9 h-9 mr-10"
              }`}
            />
        
          

          <div className="row-span-10 mt-4 ">
            <ul className="pt-2 ">
              {Menus.map((menu, index) => (
                <React.Fragment key={index}>
                  <NavLink to={menu.to}>
                    <li
                      className={` cursor-pointer text-md flex items-center pl-12 text-gray-500 font-medium font-Source Sans Pro gap-x-3 p-2 mt-1  transition-all duration-700 hover:bg-gray-200 hover:text-primary  ${
                        location.pathname === menu.to
                          ? `${
                              open
                                ? "bg-gray-200 text-primary transition-all duration-500"
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
                          <div className="">{menu.icon}</div>
                        </span>
                        <span
                          className={`font-alegerya text-base flex-1 duration-300 ${
                            !open && "hidden"
                          }`}
                        >
                          {menu.title}
                        </span>
                      </div>

                      {/* {menu.submenu && open && (
                    <BsChevronDown
                      className={`cursor-pointer transition-transform delay-100  ${
                        submenuopen && "rotate-180"
                      }`}
                      onClick={() => Setsubmenuopen(!submenuopen)}
                    />
                  )} */}
                    </li>
                  </NavLink>
                  {menu.submenu && submenuopen && open && (
                    <ul>
                      {menu.submenuItems.map((submenuitem, subIndex) => (
                        <NavLink to={submenuitem.to} key={subIndex}>
                          <li
                            className={` cursor-pointer font-alegerya text-sm flex items-center gap-x-2 p-2 pl-20 hover:bg-gray-200 hover:text-primary ${
                              location.pathname === submenuitem.to
                                ? "bg-gray-200 text-primary "
                                : "text-white"
                            }`}
                          >
                            {submenuitem.title}
                          </li>
                        </NavLink>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`flex flex-col bg-gray-200  no-scrollbar h-screen transition-all duration-300 overflow-hidden ${
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

export default Sidebar;
