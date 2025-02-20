"use client";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import DateFormatSetting from "./DateFormatSetting";

const SettingsContainer = ({ close }) => {
  return (
    <div className="w-96 m-8 min-h-[25rem] max-h-[25rem] border-2 border-secondary bg-base-300 rounded-xl flex flex-col shadow-lg overflow-auto">
      <ThemeSwitcher close={close} />
      <DateFormatSetting />
    </div>
  );
};

export default SettingsContainer;
