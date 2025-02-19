"use client";
import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  return <div className="font-mono text-7xl pt-8 text-primary">{ctime}</div>;
};

export default Clock;
