
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="flex relative">
          <div className="flex flex-col relative">
            <span className=" text-[10px]  font-josephin px-4 tracking-widest absolute -bottom-2 underline ">
              DİGİTAL AGENCY
            </span>

            <span
              className="
      text-[30px] text-hover font-bold
      "
            >
              Cans
              <span className="text-white">Web</span>
            </span>
          </div>
         

         
        </div>
      </Link>
    </>
  );
};

export default Logo;
