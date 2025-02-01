import HabitTrackContainer from "@/components/HabitTracker/HabitTrackContainer";
import ToDoContainer from "@/components/Todo-list/ToDoContainer";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-between">
      <div className="flex">
        <ToDoContainer />
      </div>
      <HabitTrackContainer />
    </div>
  );
};

export default DashboardPage;
