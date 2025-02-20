import React from "react";
import SettingsButton from "./Settings/SettingsButton";

const Header = () => {
  return (
    <nav className="w-screen py-4 px-12 border-b border-mutedmidgray bg-base-200 flex justify-between">
      <h1 className="text-2xl font-bold text-info font-mono">PP</h1>
      <SettingsButton />
    </nav>
  );
};

export default Header;
