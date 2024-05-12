"use client";
import React, { useState } from "react";
import Tab from "./tab";
import TabContent from "./tab-content";

const Index = () => {
  const [activeTab, setActiveTab] = useState("stats");

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ul
        className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
        id="fullWidthTab"
        data-tabs-toggle="#fullWidthTabContent"
        role="tablist"
      >
        <Tab
          id="stats"
          label="Statistics"
          isActive={activeTab === "stats"}
          onClick={() => handleTabClick("stats")}
        />
        <Tab
          id="about"
          label="Services"
          isActive={activeTab === "about"}
          onClick={() => handleTabClick("about")}
        />
        <Tab
          id="faq"
          label="FAQ"
          isActive={activeTab === "faq"}
          onClick={() => handleTabClick("faq")}
        />
      </ul>
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200 dark:border-gray-600"
      >
        <TabContent activeTab={activeTab}></TabContent>
      </div>
    </div>
  );
};

export default Index;
