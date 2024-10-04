import React from 'react'
import { useState, Suspense } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const Sidebar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(true);
    const [submenuopen, Setsubmenuopen] = useState(false);
   

    const Menus = [
        { title: "Dashboard", icon:"#", to: "#" },
        { title: "Insitution", icon:"#", to: "#" },
        { title: "Leads", icon:"#", to: "#" },
        { title: "Enquires", icon:"#", to: "#" },
        { title: "Tickets", icon:"#", to: "#" },
        { title: "Packages", icon:"#", to: "#" },
        { title: "Users", icon:"#", to: "#" },
        { title: "Interview", icon:"#", to: "#" }, 
        { title: "Subscription", icon:"#", to: "#" },
        { title: "Settings", icon:"#", to: "#" },
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
        className={`absolute top-4 right-2 cursor-pointer transition-transform text-2xl ${open ? "text-white " : "md:text-white text-black "}  `}
        onClick={() => setOpen(!open)}
        fontSize="small"
      />
        <h1
          className={`text-2xl font-semibold font-Roboto Serif pt-8 text-blue-500 font-serif  text-center font-alegerya transition-opacity duration-500 ${
            !open && "opacity-0"
          }`}
        >
          Orbit BLUE
        </h1>

      <div className="row-span-10 mt-4 ">
        <ul className="pt-2 ">
          {Menus.map((menu, index) => (
            <React.Fragment key={index} >
              <NavLink to={menu.to}> 
                <li
                  className={` cursor-pointer text-md flex items-center pl-12 text-gray-500 font-medium font-Source Sans Pro gap-x-3 p-2 mt-1  transition-all duration-700 hover:bg-gray-200 hover:text-primary  ${
                    location.pathname === menu.to 
                      ? `${ open ?  "bg-gray-200 text-primary transition-all duration-500" : "md:bg-gray-200 md:text-primary md:transition-all md:duration-500 duration-75"}`
                      : "text-gray-500  "
                  }`}
                
                >
                  <div className="flex items-center gap-x-2">
                    <span
                      className={`md:block md:float-left ${
                        open ? "md:text-2xl" : "md:text-3xl md:ml-3 md:opacity-100 opacity-0"
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
      {/* <Header /> */}
      <Suspense >
        <Outlet />
      </Suspense>
    </div>

  </div>
    </div>
  )
}

export default Sidebar
