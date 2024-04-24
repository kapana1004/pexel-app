import React from "react";
import LogoImg from "/assets/Logo.jpeg";
export default function Navigation() {
  return (
    <nav className=" flex justify-between pl-[90px] pr-[90px] pt-[20px] w-[100%]">
      <div className=" flex w-[120px] h-[50px] justify-between items-center cursor-pointer hover:opacity-75">
        <img
          className=" w-[50px] h-[50px] rounded-[10px]"
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
