import React from "react";
import TopPage from "./TopPage";
import LeftPage from "./LeftPage";
import CenterPage from "./CenterPage";

export default function Index() {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <TopPage />
        </div>
        <div className="flex">
          <LeftPage />
          <CenterPage />
        </div>
      </div>
    </div>
  );
}
