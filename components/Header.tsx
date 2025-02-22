import React from "react";
import SettingsButton from "./Settings/SettingsButton";
import SignIn from "./signin-button";
import { auth } from "@/auth";
import { SignOut } from "./signout-button";

const Header = async () => {
  const session = await auth();

  return (
    <nav className="w-screen py-2 px-12 border-b border-mutedmidgray bg-base-200 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-info font-mono">PP</h1>
      <div className="flex items-center justify-center gap-4">
        <SettingsButton />
        {!session ? <SignIn /> : <SignOut />}
      </div>
    </nav>
  );
};

export default Header;
