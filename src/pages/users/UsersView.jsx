import React, { useState } from "react";
import UserBoard from "./UserBoard";
import Resume from "./Resume";
import UpcomingInterview from "./UpcomingInterview";
import Reports from "./Reports";

const UsersView = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <div className="font-exo font-bold text-2xl text-[#2C3E50]">
        <span>
          Users
          {activeTab === 1
            ? "/view"
            : activeTab === 2
            ? "/Resume"
            : activeTab === 3
            ? "/Upcoming interviews"
            : "/Reports"}
        </span>
      </div>

      <div className="flex gap-6 my-6 text-grey text-base font-semibold">
        <button
          className={`cursor-pointer ${
            activeTab === 1
              ? "text-orange border-b-[6px] pb-2 border-orange"
              : "text-grey"
          }`}
          onClick={() => handleTab(1)}
        >
          User Dashboard
        </button>
        <button
          className={`cursor-pointer ${
            activeTab === 2
              ? "text-orange border-b-4 pb-2 border-orange"
              : "text-grey"
          }`}
          onClick={() => handleTab(2)}
        >
          Resume
        </button>
        <button
          className={`cursor-pointer ${
            activeTab === 3
              ? "text-orange border-b-4 pb-2 border-orange"
              : "text-grey"
          }`}
          onClick={() => handleTab(3)}
        >
          Upcoming interviews
        </button>
        <button
          className={`cursor-pointer ${
            activeTab === 4
              ? "text-orange border-b-4 pb-2 border-orange"
              : "text-grey"
          }`}
          onClick={() => handleTab(4)}
        >
          Reports
        </button>
      </div>

      {activeTab === 1 && <UserBoard />}
      {activeTab === 2 && <Resume />}
      {activeTab === 3 && <UpcomingInterview />}
      {activeTab === 4 && <Reports />}
    </>
  );
};

export default UsersView;
