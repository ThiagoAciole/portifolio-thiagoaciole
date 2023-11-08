/* eslint-disable react/prop-types */
import { useState } from "react";

const Tabs = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col">
      <div className="flex border-gray-300 justify-center px-4">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleTabClick(id)}
            className={`px-4 py-2 text-gray-600 ${
              activeTab === id ? "border-b-2 border-sky-700" : "bg-white"
            }`}>
            {label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {tabs.map(({ id, content }) => (
          <div key={id} className={`${activeTab === id ? "block" : "hidden"}`}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
