import { auth } from "@/auth";
import CenterContainer from "@/components/CenterDisplay/CenterContainer";
import HabitTrackContainer from "@/components/HabitTracker/HabitTrackContainer";
import Notepad from "@/components/Notepad/Notepad";
import ToDoContainer from "@/components/Todo-list/ToDoContainer";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();

  const today = new Date().toISOString().split("T")[0];

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-[90vh] flex flex-col justify-between bg-base-100">
      <div className="flex justify-between md:flex-row flex-col items-center">
        <ToDoContainer userId={session?.user?.id} date={today} />
        <div className="w-[80%] md:hidden border-t border-mutedmidgray mx-auto mt-2 order-2"></div>
        <CenterContainer />
        <div className="w-[80%] md:hidden border-t border-mutedmidgray mx-auto mt-2 order-4"></div>
        <Notepad />
      </div>
      <HabitTrackContainer />
    </div>
  );
};

export default DashboardPage;
