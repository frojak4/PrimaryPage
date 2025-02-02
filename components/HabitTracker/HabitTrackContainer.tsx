import React from "react";
import HabitTrackItem from "./HabitTrackItem";
import AddHabit from "./AddHabit";

const HabitTrackContainer = () => {
  return (
    <div className="w-screen">
      <div className="w-[80%] md:hidden border-t border-mutedmidgray mx-auto"></div>
      <div className="flex md:mx-8 mt-8 md:mt-0 mb-2 flex-wrap gap-2 md:flex-nowrap justify-center md:justify-start">
        <HabitTrackItem checked={true} />
        <HabitTrackItem checked={true} />
        <HabitTrackItem checked={false} />
        <HabitTrackItem checked={false} />
        <AddHabit />
      </div>
    </div>
  );
};

export default HabitTrackContainer;
