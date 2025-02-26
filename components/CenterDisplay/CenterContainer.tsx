import React from "react";
import Clock from "./Clock";
import Quote from "./Quote";
import DatePicker from "./DatePicker";

const CenterContainer = () => {
  return (
    <div className="flex flex-col items-center self-start order-1 md:order-none py-24 md:py-0">
      <DatePicker />
      <Clock />
      <Quote />
    </div>
  );
};

export default CenterContainer;
