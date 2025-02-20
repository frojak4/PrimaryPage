"use client";
import React, { useEffect, useState } from "react";
import { useDateFormat } from "./DateFormatContext";

const DateFormatSetting = () => {
  const { dateFormat, setDateFormat } = useDateFormat();

  /* const [dateFormat, setDateFormat] = useState("absolute");

  useEffect(() => {
    const currentDateFormat = localStorage.getItem("dateformat");

    setDateFormat(currentDateFormat || "absolute");
  }, []);
*/

  const handleChange = (value: string) => {
    setDateFormat(value);
  };

  return (
    <div className="text-base-content">
      <h3 className="pt-4 pl-4 pb-2 font-semibold">Date Format: </h3>
      <form className="flex justify-center gap-8">
        <label className="label">
          <span className=" p-2">Absolute</span>
          <input
            type="radio"
            value="absolute"
            className="radio"
            name="formatsetting"
            checked={dateFormat === "absolute"}
            onChange={() => handleChange("absolute")}
          />
        </label>
        <label className="label">
          <span className=" p-2">Relative</span>
          <input
            type="radio"
            value="relative"
            className="radio"
            name="formatsetting"
            checked={dateFormat === "relative"}
            onChange={() => handleChange("relative")}
          />
        </label>
      </form>
    </div>
  );
};

export default DateFormatSetting;
