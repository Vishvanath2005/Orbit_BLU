import React from "react";
import { HiArrowsUpDown } from "react-icons/hi2";

const Insitution = () => {
  return (
    <div>
      <div className="flex my-3 justify-between">
        <p className="font-Exo font-semibold text-3xl font">Insitution </p>
        <button className="bg-orange py-2 px-4 rounded-lg text-white font-Source_Sans_Pro">
          Add Insitution
        </button>
      </div>
      <table className="w-full bg-white items-center rounded-lg">
        <thead className="border-b-4  ">
          <tr className="   ">
              <th className=" pl-4 font-semibold  py-4">
               <p className="flex items-center"> S.No <HiArrowsUpDown /></p>
              </th>

              <th className="font-semibold px-2 ">
              <p className="flex items-center">  Institution ID <HiArrowsUpDown />{" "}</p>
              </th>

              <th className="font-semibold px-2 ">
              <p className="flex items-center">  Institution Name <HiArrowsUpDown /></p>
              </th>

              <th className="font-semibold px-2">
              <p className="flex items-center">   Email ID <HiArrowsUpDown /></p>
              </th>

              <th className="font-semibold px-2">
              <p className="flex items-center">  SPOC Name
                <HiArrowsUpDown /></p>
              </th>

              <th className="font-semibold px-2">
              <p className="flex items-center">  Credit <HiArrowsUpDown /></p>
              </th>

              <th className="font-semibold px-2">
              <p className="flex items-center">  Date <HiArrowsUpDown /></p>
              </th>

              <th className="font-semibold px-2">
              <p className="flex items-center">  Status <HiArrowsUpDown /></p>
              </th>

              <th className="font-semibold pr-4"><p className="flex items-center">asd</p></th>
          </tr>
        </thead>
        <tbody className="my-3 items-center">
          <tr className=" text-start">
            <td className="pl-4 py-2">1</td>
            <td className="pl-4">vishvanath</td>
            <td className="pl-4">Sathyabama </td>
            <td className="pl-4">vishvanth202005@gmail.com</td>
            <td className="pl-4">Ravi</td>
            <td className="pl-4">100</td>
            <td className="pl-4">10th of </td>
            <td className="pl-4">1</td>
            <td className="pl-4">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Insitution;
