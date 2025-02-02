import HabitTrackContainer from "@/components/HabitTracker/HabitTrackContainer";
import Notepad from "@/components/Notepad/Notepad";
import ToDoContainer from "@/components/Todo-list/ToDoContainer";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-between">
      <div className="flex justify-between md:flex-row flex-col items-center">
        <ToDoContainer />
        <div className="w-[80%] md:hidden border-t border-mutedmidgray mx-auto"></div>
        <Notepad />
      </div>
      <HabitTrackContainer />
    </div>
  );
};

export default DashboardPage;
