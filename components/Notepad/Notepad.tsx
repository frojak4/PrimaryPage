"use client";
import { SaveNotes } from "@/actions/NotepadActions";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Notepad = () => {
  const [page, setPage] = useState<number>(1);
  const [notes, setNotes] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

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

  const handleBlur = async () => {
    await SaveNotes(page, notes[page - 1]);
  };

  const saveNoteLocally = async (e) => {
    console.log(e.target.value);
    const newArray = [...notes];
    newArray[page - 1] = e.target.value;
    console.log(newArray);
    setNotes(newArray);
  };

  return (
    <div className="m-8 p-4 bg-base-300 h-min rounded-xl shadow-lg font-sans text-2xl font-light flex flex-col order-5 md:order-none border border-neutral">
      <div className="flex text-2xl text-base-content pb-4">
        <button
          type="button"
          onClick={handlePageBack}
          className="hover:text-white/65 disabled:text-base-content/60"
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
      <textarea
        onChange={saveNoteLocally}
        value={notes[page - 1]}
        onBlur={handleBlur}
        className="h-96 w-80 rounded-md bg-neutral text-neutral-content resize-none p-2 border border-primary focus:bg-neutral/80 focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
};

export default Notepad;
