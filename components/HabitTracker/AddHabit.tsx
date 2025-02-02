import React from "react";
import { FaPlus } from "react-icons/fa";

const AddHabit = () => {
  return (
    <button className="border group border-darkGray bg-gray rounded-xl mx-2 h-32 md:w-48 w-40 shadow-md font-mono flex justify-center items-center">
      <p className="text-4xl text-secondaryText group-hover:text-white/65">
        <FaPlus />
      </p>
    </button>
  );
};

export default AddHabit;
