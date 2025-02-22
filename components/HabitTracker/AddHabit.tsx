"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "../Modal";
import AddHabitModal from "./AddHabitModal";

const AddHabit = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="border group border-neutral bg-base-300 rounded-xl mx-2 h-32 md:w-48 w-40 shadow-md font-mono flex justify-center items-center"
      >
        <p className="text-4xl text-secondaryText group-hover:text-white/65">
          <FaPlus />
        </p>
      </button>

      {open && (
        <Modal close={handleClose}>
          <AddHabitModal />
        </Modal>
      )}
    </>
  );
};

export default AddHabit;
