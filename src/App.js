import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Sidebar from "../src/components/Sidebar";
import Submenu from "../src/components/Submenu";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
