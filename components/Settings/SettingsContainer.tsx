"use client";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const SettingsContainer = ({ close }) => {
  return (
    <div className="w-96 m-8 min-h-[25rem] max-h-[25rem] border-2 border-secondary bg-primary-content rounded-xl flex flex-col shadow-lg overflow-auto">
      <ThemeSwitcher close={close} />
    </div>
  );
};

export default SettingsContainer;
