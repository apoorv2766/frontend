import React from "react";
import { Link } from "react-router-dom";
import About from "../About";
const Main = () => {
  return (
    <>
      <div className="lg:grid grid-cols-2 m-auto gap-5 flex flex-col mt-[10rem]">
        <div className="bg-student bg-cover h-[20rem] w-[20rem] max-sm:h-[13rem] max-sm:w-[13rem] flex flex-col m-auto items-center justify-center">
          <Link to="/student">
            <button className="text-white border-2 rounded-xl text-2xl p-2">
              STUDENT LOGIN
            </button>
          </Link>
        </div>
        <div className="bg-teacher bg-cover h-[20rem] w-[20rem] max-sm:h-[13rem] max-sm:w-[13rem] flex flex-col m-auto items-center justify-center">
          <Link to="/teacher">
            <button className="text-white border-2 rounded-xl text-2xl p-2">
              TEACHER LOGIN
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
