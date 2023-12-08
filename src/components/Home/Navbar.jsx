import React, { useState } from "react";
import logo from "../../assets/AG.png";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
  let [nav, setnav] = useState(false);
  return (
    <div className="w-full flex items-center justify-between bg-gray-400">
      <div className="flex items-center justify-center">
        <img src={logo} alt="ag" className="h-20" />
      </div>
      <div className="list-none text-lg gap-7 cursor-pointer lg:flex hidden ">
        <li className="hover:text-orange-500">AboutUs</li>
        <li className="hover:text-orange-500">ContactUS</li>
        <li className="hover:text-orange-500">OurService</li>
        <li className="hover:text-orange-500">OurProduct</li>
      </div>
      <div
        className="bg-green-400 py-2 px-4 mr-5 border-2 border-gray-100 text-xl
       hover:text-white cursor-pointer hover:border-red-600 hover:bg-slate-400
         hidden lg:flex"
      >
        WEBSITE
      </div>
      <div
        className="text-3xl lg:hidden relative p-4 border border-gray-50 cursor-pointer"
        onClick={() => setnav((prev) => !prev)}
      >
        {nav ? <GiCrossedBones /> : <TiThMenu />}
        {nav && (
          <div className="list-none text-20xl sm:absolute flex flex-col -left-[23rem] top-[20rem] gap-12 bg-transparent p-12 ">
            <li className="hover:text-orange-500">AboutUs</li>
            <li className="hover:text-orange-500">ContactUS</li>
            <li className="hover:text-orange-500">OurService</li>
            <li className="hover:text-orange-500">OurProduct</li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
