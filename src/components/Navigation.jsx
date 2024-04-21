import React from "react";
import LogoImg from "../../public/assets/Logo.jpeg";
export default function Navigation() {
  return (
    <nav className=" flex justify-between pl-[60px] pr-[60px] pt-[30px] w-[100%]">
      <div className=" flex w-[120px] h-[50px] justify-between items-center cursor-pointer hover:opacity-75">
        <img
          className=" w-[60px] h-[60px] rounded-[10px]"
          src={LogoImg}
          alt="logo"
        />
        <span className=" text-white text-[20px]">Pexel</span>
      </div>
      <button className=" w-[100px] h-[50px] bg-white rounded-[10px] hover:bg-emerald-200">
        Join
      </button>
    </nav>
  );
}
