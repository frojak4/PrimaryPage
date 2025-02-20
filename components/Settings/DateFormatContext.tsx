"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type DateFormatContextType = {
  dateFormat: string;
  setDateFormat: (format: string) => void;
};

const DateFormatContext = createContext<DateFormatContextType | undefined>(
  undefined
);

const DateFormatProvider = ({ children }: { children: React.ReactNode }) => {
  const [dateFormat, setDateFormat] = useState("absolute");

  useEffect(() => {
    const currentDateFormat = localStorage.getItem("dateformat");

    setDateFormat(currentDateFormat || "absolute");
  }, []);

  useEffect(() => {
    localStorage.setItem("dateformat", dateFormat);
  }, [dateFormat]);

  return (
    <DateFormatContext.Provider value={{ dateFormat, setDateFormat }}>
      {children}
    </DateFormatContext.Provider>
  );
};

export default DateFormatProvider;

export const useDateFormat = () => {
  const context = useContext(DateFormatContext);
  if (!context)
    throw new Error("useDateFormat must be used within a DateFormatProvider");

  return context;
};
