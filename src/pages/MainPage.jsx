import React from "react";

export default function MainPage() {
  return (
    <div className=" flex justify-center pt-[30px]">
      <div className=" flex flex-row justify-between w-[450px]">
        {" "}
        <button className=" flex justify-center items-center h-[48px] w-[90px] text-[16px] text-white font-semibold  bg-black rounded-[30px] hover:opacity-85">
          Home
        </button>{" "}
        <button className=" flex justify-center items-center h-[48px] w-[90px] text-[16px] font-semibold   rounded-[30px]">
          videos
        </button>
        <button className="flex justify-center items-center h-[48px] w-[120px] text-[16px] font-semibold   rounded-[30px]">
          Leaderboard
        </button>
        <button className="flex justify-center items-center h-[48px] w-[110px] text-[16px]  font-semibold   rounded-[30px]">
          Challenges
        </button>
      </div>
    </div>
  );
}
