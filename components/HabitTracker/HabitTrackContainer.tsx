import React from "react";
import HabitTrackItem from "./HabitTrackItem";

const HabitTrackContainer = () => {
  return (
    <div className="w-screen">
      <div className="flex mx-8 mb-2">
        <HabitTrackItem checked={true} />
        <HabitTrackItem checked={true} />
        <HabitTrackItem checked={false} />
        <HabitTrackItem checked={false} />
      </div>
    </div>
  );
};

export default HabitTrackContainer;
