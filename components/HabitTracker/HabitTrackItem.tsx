import React from "react";
import { FaFire } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const HabitTrackItem = ({ checked }: { checked: boolean }) => {
  return (
    <form className="border border-darkGray bg-gray rounded-xl mx-2 h-32 md:w-48 w-40 flex flex-col shadow-md font-mono">
      <p className="text-2xl p-3 text-secondaryText">Running</p>
      <div className="flex justify-between">
        <button
          type="submit"
          className="group w-10 h-10 border-2 border-darkGray bg-lightestGray ml-6 text-3xl flex justify-center items-center"
        >
          {checked ? (
            <FaCheck className="text-red" />
          ) : (
            <FaCheck className="opacity-0 transition-opacity group-hover:opacity-100 text-secondaryText" />
          )}
        </button>
        <div className="flex text-3xl gap-1 text-accent mr-4 select-none">
          <span>8</span>
          <FaFire />
        </div>
      </div>
    </form>
  );
};

export default HabitTrackItem;
