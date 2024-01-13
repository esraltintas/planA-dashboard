import React from "react";
import NavBar from "../components/NavBar/Navbar";
import Dashboard from "../components/Dashboard/Dashboard";
const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default Home;
