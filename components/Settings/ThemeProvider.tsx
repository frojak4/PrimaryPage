"use client";
import React, { useEffect, useState } from "react";

const ThemeProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "night";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return null;
};

export default ThemeProvider;
