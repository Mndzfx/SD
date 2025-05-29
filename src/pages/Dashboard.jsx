import React from "react";
import Header from "../components/header";
import Fitur from "../components/fitur";
import Iklan from "../components/iklan";
import Navbar from "../components/navbar";

const Dashboard = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      <Header />
      <Fitur />
      <Iklan />
      <Navbar />
    </div>
  );
};

export default Dashboard;
