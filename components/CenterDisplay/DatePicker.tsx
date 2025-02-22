"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDateFormat } from "../Settings/DateFormatContext";

const DatePicker = () => {
  const [date, setDate] = useState<Date | null>();
  const [formatDate, setFormatDate] = useState<string>("");
  const [onCurrentDate, setOnCurrentDate] = useState<boolean>(true);

  const { dateFormat } = useDateFormat();

  useEffect(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    if (date === null) return;

    const today = new Date();
    const isCurrentDate = date?.toDateString() === today.toDateString();
    setOnCurrentDate(isCurrentDate);
  }, [date]);

  useEffect(() => {
    if (!date) return;
    if (dateFormat === "absolute") {
      const cdate = moment(date).format("MMMM Do");
      setFormatDate(cdate);
    } else if (dateFormat === "relative") {
      const cdate = moment(date).calendar(null, {
        sameDay: "[Today]",
        lastDay: "[Yesterday]",
        lastWeek: "dddd",
        sameElse: "MMMM Do",
      });
      setFormatDate(cdate);
    }
  }, [date, dateFormat]);

  const handleDateBack = () => {
    setDate((prevDate) => {
      if (prevDate === null) return null;
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 1);
      return newDate;
    });
  };

  const handleDateForward = () => {
    if (onCurrentDate) return;

    setDate((prevDate) => {
      if (prevDate === null) return null;

      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 1);
      return newDate;
    });
  };

  return (
    <div className="flex justify-center text-center pt-4 items-center">
      <button
        className="text-4xl text-info hover:text-info/80 btn"
        onClick={handleDateBack}
      >
        <IoIosArrowBack />
      </button>
      <h1 className="text-2xl text-accent font-mono min-w-52">{formatDate}</h1>
      <button
        className="text-4xl text-info disabled:text-error btn"
        onClick={handleDateForward}
        disabled={onCurrentDate}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default DatePicker;
