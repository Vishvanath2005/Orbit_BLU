import React, { useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import HeaderButton from "../../components/HeaderButton";
import ViewInstitution from "../institution/ViewInstitution";
import AddInstitution from "./AddInstitution";

const Institution = () => {
  const hasCreatePermission = "create";
  const [isModal, setIsModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const openviewIns = () => {
    setIsModal(true);
  };

  const openadd = () => {
    setAddModal(true);
  };

  const closeadd = () => {
    setAddModal(false);
  };

  const close = () => {
    setIsModal(false);
  };
  return (
    <>
      <div>
        <div className="flex my-3 justify-between  items-center">
          <p className="font-Exo font-semibold text-3xl font">Institution </p>
          <HeaderButton
            title="Institution"
            hasCreatePermission={hasCreatePermission}
            onClick={openadd}
          />
        </div>
        <div className=" overflow-x-auto  no-scrollbar">
          <table className="w-full  items-center rounded-lg overflow-auto ">
            <thead className="items-center">
              <tr className=" text-end border-b-2 ">
                <th className="bg-slate-200 p-4 font-semibold rounded-l-lg ">
                  <p className="flex gap-1 items-center">
                    {" "}
                    S.No <HiArrowsUpDown className="text-gray-400" />
                  </p>
                </th>

                <th className="bg-slate-200  font-semibold ">
                  <p className="flex gap-1 items-center">
                    {" "}
                    Institution ID <HiArrowsUpDown className="text-gray-400" />{" "}
                  </p>
                </th>

                <th className="bg-slate-200 font-semibold pl-2">
                  <p className="flex gap-1 items-center">
                    {" "}
                    Institution Name{" "}
                    <HiArrowsUpDown className="text-gray-400" />
                  </p>
                </th>

                <th className=" bg-slate-200 font-semibold pl-14 ">
                  <p className="flex gap-1 items-center">
                    {" "}
                    Email ID <HiArrowsUpDown className="text-gray-400" />
                  </p>
                </th>

                <th className="bg-slate-200  font-semibold px-5">
                  <p className="flex gap-1 items-center">
                    {" "}
                    SPOC Name
                    <HiArrowsUpDown className="text-gray-400" />
                  </p>
                </th>

                <th className="font-semibold bg-slate-200 px-1">
                  <p className="flex gap-1 items-center">
                    {" "}
                    Credit <HiArrowsUpDown className="text-gray-400" />
                  </p>
                </th>

                <th className=" items-center bg-slate-200 font-semibold pl-12 px-3">
                  <p className="flex gap-1">
                    {" "}
                    Date <HiArrowsUpDown className="text-gray-400" />
                  </p>
                </th>

                <th className="items-center bg-slate-200 font-semibold px-2">
                  <p className="flex gap-1 items-center">
                    {" "}
                    Status <HiArrowsUpDown className="text-gray-400" />
                  </p>
                </th>

                <th className="font-semibold bg-slate-200 rounded-r-lg">
                  <p className="items-center pr-6">Action</p>
                </th>
              </tr>
            </thead>
            <tbody className="overflow-x-auto">
              <tr className="text-sm text-start bg-white text-table-text border-b-2 ">
                <td className="py-3 pl-4 ">
                  <p>123</p>
                </td>
                <td className="px-10 text-blue-500">
                  <p className="cursor-pointer" onClick={openviewIns}>
                    <u>12345</u>
                  </p>
                </td>
                <td className="px-10">
                  <p>Sathyabama</p>
                </td>

                <td className=" ">
                  <p>vishvanth202005@gmail.com</p>
                </td>
                <td className="text-center px-16 ">
                  <p>Ravi</p>
                </td>
                <td className=" px-7 text-credits">
                  <p>100</p>
                </td>
                <td className="px- ">
                  <p>18 June 24, 02.23 PM</p>
                </td>
                <td className=" text-center ">
                  <p className="bg-red-100 text-red-700  rounded-lg p-1 text-base font-semibold">
                    Inactive
                  </p>
                </td>
                <td className="flex justify-center">
                  <p className="bg-red-100 rounded-md text-red-700 mt-1.5 p-1.5">
                    {" "}
                    <RiDeleteBin6Line className="text-lg" />
                  </p>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
        <div className=" m-4 flex justify-between text-sm font-Source_Sans_Pro text-gray-400">
          <p>showing result for 1 out of 1 </p>
          <div className="flex gap-2">
            <p className="flex gap-1 items-center text-orange">
              <GoArrowLeft /> Previous
            </p>
            <div className="flex items-center gap-4">
              <p className="bg-orange px-2 p-0.5 rounded-md text-white">1</p>
              <p>2</p>
              <p>3</p>
              <p>...</p>
            </div>
            <p className="flex gap-1 items-center text-orange">
              Next
              <GoArrowRight />
            </p>
          </div>
        </div>

        <div className="flex justify-center py-3"></div>
      </div>
      {isModal && <ViewInstitution closed={close} />}
      {addModal && <AddInstitution closeadd={closeadd} closed={close} />}
    </>
  );
};

export default Institution;
