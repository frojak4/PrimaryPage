"use client";
import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import Modal from "../Modal";
import SettingsContainer from "./SettingsContainer";

const SettingsButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <IoMdSettings
        className="text-3xl text-info hover:cursor-pointer hover:text-info/80"
        onClick={() => setOpen(true)}
      />

      {open && (
        <Modal close={() => setOpen(false)}>
          <SettingsContainer close={() => setOpen(false)} />
        </Modal>
      )}
    </>
  );
};

export default SettingsButton;
