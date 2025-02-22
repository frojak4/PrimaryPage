import React from "react";
import HabitTrackItem from "./HabitTrackItem";
import AddHabit from "./AddHabit";

const HabitTrackContainer = () => {
  return (
    <div className="w-screen">
      <div className="w-[80%] md:hidden border-t border-mutedmidgray mx-auto"></div>
      <div className="flex md:mx-8 mt-8 md:mt-0 mb-2 flex-wrap gap-2 md:flex-nowrap justify-center md:justify-start">
        <HabitTrackItem id={1} checked={true} />
        <HabitTrackItem id={2} checked={true} />
        <HabitTrackItem id={3} checked={false} />
        <HabitTrackItem id={4} checked={false} />
        <AddHabit />
      </div>
    </div>
  );
};

export default HabitTrackContainer;
