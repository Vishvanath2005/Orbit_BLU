import React, { useState } from "react";
import Select from "react-select";
import { IoClose } from "react-icons/io5";
const AddUser = ({ onClose }) => {
  const [add, setAdd] = useState(false);
  const handleUser = () => {
    setAdd(true);
  };
  const skills = [
    { label: "Interaction Design", value: "InteractionDesign" },
    { label: " Visual Design", value: "VisualDesign" },
    { label: "User Testing", value: "UserTesting" },
  ];
  return (
    <>
      <div className=" font-Source_Sans_Pro fixed overflow-auto inset-0 flex justify-center  items-center bg-opacity-25 backdrop-blur-sm">
        <div className="w-[900px] px-6  mx-2 shadow-lg bg-white rounded-lg">
          <div className="grid  ">
            <button
              onClick={onClose}
              className=" place-self-end bg-white  rounded-full lg:-mx-4 lg:-my-5 md:-my-5 md:-mx-4 my-1 mx-1 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 "
            >
              <IoClose className="size-[24px]" />
            </button>
            <div className=" pb-4">
              <h1 className="grid justify-center py-4 text-[#383E49] font-bold border-b-2 mx-5  text-xl">
                Add Users{" "}
              </h1>
            </div>
            <form>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 ">
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="col-span-2 text-base text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                    />
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                      Credits
                    </label>
                    <input
                      type="text"
                      placeholder="Add Credits"
                      className="col-span-2 text-base  text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                    />
                  </div>
                  <div className="col-span-6 flex justify-between my-2  items-center ">
                    <label className="col-span-4 text-[#48505E] text-base font-normal  ">
                      Gender
                    </label>
                    <select
                      placeholder="Select gender"
                      className=" col-span-2 text-base  border border-[#D0D5DD] text-grey rounded-md w-60 h-11 px-2 "
                    >
                      <option value="call">Male</option>
                      <option value="email">Female</option>
                      <option value="sms">Other</option>
                    </select>
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className="col-span-4 text-[#48505E] text-base font-normal ">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className=" col-span-2 text-base  text-grey border border-[#D0D5DD] rounded-md w-60 h-11  px-2 "
                    />
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className="col-span-4 text-[#48505E] text-base font-normal ">
                      Age
                    </label>
                    <input
                      type="number"
                      placeholder="Type age"
                      className=" col-span-2 text-base  text-grey border border-[#D0D5DD] rounded-md w-60 h-11  px-2 "
                    />
                  </div>
                  <div className="col-span-6 flex justify-between my-2  items-center ">
                    <label className="col-span-4 text-[#48505E] text-base font-normal  ">
                      Departement
                    </label>
                    <select
                      defaultValue="Select Department"
                      className=" col-span-2 text-base   border border-[#D0D5DD] text-grey rounded-md w-60 h-11 px-2 "
                    >
                     
                      <option value="call">Dept 1</option>
                      <option value="email">Dept 2</option>
                      <option value="sms">Dept 3</option>
                    </select>
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className=" col-span-4 text-[#48505E] text-base font-normal">
                      Email Id{" "}
                    </label>
                    <input
                      type="email"
                      placeholder=" Enter your Email"
                      className=" col-span-2 text-base  text-grey border border-[#D0D5DD] w-60 rounded-md  h-11 px-2 "
                    />
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className="col-span-4 text-[#48505E] text-base font-normal ">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your number"
                      className=" col-span-2 text-base  text-grey border border-[#D0D5DD] rounded-md w-60 h-11  px-2 "
                    />
                  </div>
                </div>
                <div className="col-span-6 ">
                  <div className="col-span-6 items-center flex justify-between">
                    <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                      Apartment
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Apartment"
                      className="col-span-2 text-base  text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                    />
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your City"
                      className="col-span-2 text-base  text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                    />
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your State"
                      className="col-span-2 text-base  text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                    />
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className=" col-span-4  text-[#48505E] text-base font-normal ">
                      Pin code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Pincode"
                      className="col-span-2 text-base  text-grey border border-[#D0D5DD] rounded-md w-60 h-11 px-2 "
                    />
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className="col-span-4   text-[#48505E] text-base font-normal  ">
                      Skills
                    </label>
                    <Select options={skills} isMulti  className=" col-span-2 text-base w-60 z-10  text-grey rounded-md h-11  " ></Select>
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className="col-span-4 text-[#48505E] text-base font-normal  ">
                      Strong Areas
                    </label>
                   <Select options={skills} isMulti  className=" col-span-2  text-base w-60  text-grey rounded-md h-11  " ></Select>
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className="col-span-4   text-[#48505E] text-base font-normal  ">
                      Need to improve
                    </label>
                    <Select options={skills} isMulti  className=" col-span-2  text-base w-60  text-grey rounded-md h-11  " ></Select>
                  </div>
                  <div className="col-span-6 my-2  items-center flex justify-between">
                    <label className="col-span-4 text-[#48505E] text-base font-normal  ">
                      Emotional Status
                    </label>
                    <Select options={skills} isMulti  className=" col-span-2  text-base w-60  text-grey rounded-md h-11  " ></Select>
                  </div>
                </div>
                <div className="col-span-12 mb-5 flex justify-between items-center gap-4">
                  <label htmlFor="description" className="col-span-2">
                    Description
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="col-span-10 text-base  w-full border-2 rounded-lg"
                    rows={4}
                  ></textarea>
                </div>
              </div>
              <div className=" flex justify-center gap-1 mb-4 ">
                <button className="border border-orange text-orange px-8 py-2 rounded-md">
                  Cancel
                </button>
                <button className="bg-orange text-white px-9 rounded-md">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
