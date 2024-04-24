import { useState } from "react";
import Navigation from "./Navigation";
import SearchImg from "/assets/Search.jpeg";
import DotsImg from "/assets/Dots.png";
import ImageImg from "/assets/imageIcon.svg";
import ArrowDownImg from "/assets/ArrDown.svg";
import ArrowUpImg from "/assets/ArrUp.svg";

export default function Header() {
  const [arrow, setArrow] = useState(false);
  const handleArrow = () => {
    setArrow(!arrow);
  };
  return (
    <div className=" ">
      <div
        className="header  min-h-[500px]"
        style={{
          backgroundImage: `url(../assets/Cover.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navigation />
        <div className=" flex max-w-[630px] mx-auto pt-[50px] flex-col gap-y-[48px]">
          <p className=" text-white text-[33px]">
            The best free stock photos, royalty free images & videos shared by
            creators.
          </p>
          <div className=" w-[100%] h-[50px] flex flex-row bg-white pl-[5px] pt-[5px] pb-[5px] rounded-[10px]">
            <button className=" bg-red-500 w-[130px] pl-[15px] pr-[15px] border-[#bfbfbf] hover:opacity-75 rounded-[5px] flex flex-row items-center justify-between">
              <img
                className=" w-[20px] h-[20px] mt-[3px]"
                src={ImageImg}
                alt=""
              />
              <span className=" text-[16px] font-semibold font">photos</span>
              <img
                onMouseOver={handleArrow}
                className=" w-[20px] h-[20px] mt-[3px]"
                src={arrow ? ArrowUpImg : ArrowDownImg}
                alt=""
              />
            </button>
            <input
              className=" w-[430px] text-[18px] pt-[15px] pr-[4px] pb-[15px] pl-[20px]"
              type="text"
              placeholder="Search for free photos"
            />
            <button className=" w-[55px] bg-white flex justify-center items-center hover:opacity-70">
              {" "}
              <img
                className=" w-[25px] h-[25px]"
                src={SearchImg}
                alt="search"
              />
            </button>
          </div>
          <div className=" flex flex-row">
            <span className=" text-[#bfbfbf] pr-[10px] text-[16px] leading-[26px]">
              Trending:{" "}
            </span>{" "}
            <span className=" text-white text-[16px] pr-[5px] cursor-pointer hover:text-emerald-200">
              plant,{" "}
            </span>
            <span className=" text-[16px] text-white pr-[5px] cursor-pointer hover:text-emerald-200">
              motivational quotes,{" "}
            </span>{" "}
            <span className=" text-[16px] text-white pr-[5px] cursor-pointer hover:text-emerald-200">
              sustainability,{" "}
            </span>
            <span className=" text-white text-[16px] pr-[5px] cursor-pointer hover:text-emerald-200">
              spa,{" "}
            </span>
            <span className=" text-[16px] text-white pr-[10px] cursor-pointer hover:text-emerald-200">
              stock video{" "}
            </span>
            <div className="w-[24px] h-[24px] bg-slate-200 cursor-pointer border-[2px] hover:border-[cyan] rounded-full">
              {" "}
              <img className=" rounded-[50px]" src={DotsImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
