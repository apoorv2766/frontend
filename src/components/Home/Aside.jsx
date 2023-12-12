import React from "react";
import school from ".././../assets/school.jpg";

const Aside = () => {
  return (
    <div className="flex">
      <div className="h-screen max-sm:max-w-[40vw] pt-5 px-5">
        <img
          src={school}
          alt="my school"
          className="rounded-full m-auto h-[10rem] w-[10rem] max-sm:h-[4rem] max-sm:w-[4rem]"
        />
        <div className="mt-10 text-lg font-bold list-none flex flex-col gap-10 items-center">
          <li> SCHOOL NAME</li>
          <li>PLACE</li>
          <li>COURSES</li>
        </div>
      </div>
    </div>
  );
};

export default Aside;
