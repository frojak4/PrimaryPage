"use client";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Notepad = () => {
  const [page, setPage] = useState<number>(1);

  const handlePageBack = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handlePageForward = () => {
    if (page < 10) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <form className="m-8 p-4 bg-gray h-min rounded-xl shadow-lg font-sans text-2xl font-light flex flex-col">
      <div className="flex text-2xl text-secondaryText pb-4">
        <button
          type="button"
          onClick={handlePageBack}
          className="hover:text-white/65 disabled:text-secondaryText/60"
          disabled={page <= 1}
        >
          <IoIosArrowBack />
        </button>
        <p className="font-mono">{page}</p>
        <button
          type="button"
          onClick={handlePageForward}
          className="hover:text-white/65 disabled:text-secondaryText/60"
          disabled={page >= 10}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <textarea className="h-96 w-80 rounded-md bg-lightGray resize-none p-2 border border-red focus:bg-lightestGray focus:outline-none focus:ring-1 focus:ring-accent" />
    </form>
  );
};

export default Notepad;
