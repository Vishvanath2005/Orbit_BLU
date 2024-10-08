import React from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Institution = () => {
  return (
    <div>
      <div className="flex my-3 justify-between">
        <p className="font-Exo font-semibold text-3xl font">Institution </p>
        <button className="bg-orange py-2 px-4 rounded-lg text-white font-Source_Sans_Pro">
          Add Institution
        </button>
      </div>
      <table className="w-full bg-white items-center rounded-lg overflow-auto ">
        <thead className="border-b-2 items-center">
          <tr className=" text-end bg-slate-300 rounded-lg">
            <th className=" p-4 font-semibold  ">
              <p className="flex gap-2 items-center">
                {" "}
                S.No <HiArrowsUpDown />
              </p>
            </th>

            <th className="font-semibold ">
              <p className="flex gap-2 items-center">
                {" "}
                Institution ID <HiArrowsUpDown />{" "}
              </p>
            </th>

            <th className="font-semibold pl-2">
              <p className="flex gap-2 items-center">
                {" "}
                Institution Name <HiArrowsUpDown />
              </p>
            </th>

            <th className="font-semibold pl-14 ">
              <p className="flex gap-2 items-center">
                {" "}
                Email ID <HiArrowsUpDown />
              </p>
            </th>

            <th className="font-semibold ">
              <p className="flex gap-2 items-center">
                {" "}
                SPOC Name
                <HiArrowsUpDown />
              </p>
            </th>

            <th className="font-semibold ">
              <p className="flex gap-2 items-center">
                {" "}
                Credit <HiArrowsUpDown />
              </p>
            </th>

            <th className=" items-center font-semibold pl-12">
              <p className="flex gap-2">
                {" "}
                Date <HiArrowsUpDown />
              </p>
            </th>

            <th className="items-center font-semibold px-2">
              <p className="flex gap-2 items-center">
                {" "}
                Status <HiArrowsUpDown />
              </p>
            </th>

            <th className="font-semibold ">
              <p className="items-center"></p>
            </th>
          </tr>
        </thead>
        <tbody className=" text-start">
          <tr className=" text-sm text-start text-gray-400 border-b-2">
            <td className="py-3 pl-4 ">
              <p>123</p>
            </td>
            <td className="text-center text-blue-500">
              <p>
                <a href="">
                  <u>12345</u>
                </a>
              </p>
            </td>
            <td className="text-center">
              <p>Sathyabama </p>
            </td>
            <td className="text-center">
              <p>vishvanth202005@gmail.com</p>
            </td>
            <td className="text-center">
              <p>Ravi</p>
            </td>
            <td className="text-center text-credits">
              <p>100</p>
            </td>
            <td className="text-center">
              <p>18 June 24, 02.23 PM</p>
            </td>
            <td className=" text-center ">
              <p className="bg-violet-100 text-violet-500  rounded-lg p-1 text-base font-semibold">
                active
              </p>
            </td>
            <td className="px-4 text-center">
              <p className="bg-red-200 rounded-lg text-red-700 pl-3 p-1.5  items-center">
                {" "}
                <RiDeleteBin6Line  className="text-lg"/>
              </p>
            </td>
          </tr>
         
        </tbody>
      </table>

      <div className=" m-4 flex justify-between text-sm font-Source_Sans_Pro text-gray-400">
        <p>showing result for 1 out of 1 </p>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center text-orange">
            <GoArrowLeft /> Previous
          </p>
          <div className="flex items-center gap-4">
            <p className="bg-orange px-2 rounded-lg text-white">1</p>
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
  );
};

export default Institution;
