import { Outlet } from "react-router-dom";


import Navbar from "../components/Navbar";

const Authlayout = () => {
  return (
    <div className="font-poppins bg-[#F3F3F3]" >
      <header className="py-5 w-11/12 mx-auto  ">
      <Navbar></Navbar>
      </header>
     
      <div className=" ">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Authlayout;
