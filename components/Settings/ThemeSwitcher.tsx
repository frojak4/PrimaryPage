"use client";
import React, { useEffect, useState } from "react";
import { Themes } from "./themes";

const ThemeSwitcher = ({ close }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "night";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme !== null) {
      document.documentElement.setAttribute("data-theme", theme as string);
      localStorage.setItem("theme", theme as string);
    }
  }, [theme]);

  const handleThemeChange = (theme: string) => {
    console.log(theme);
    setTheme(theme);
    setTimeout(() => {
      close();
    }, 0);
  };

  if (theme === null) {
    return null;
  }

  return (
    <div>
      <h3 className="pt-4 pl-4 pb-2 font-semibold text-base-content">
        Change Theme:{" "}
      </h3>
      <div className="flex-wrap flex justify-center gap-2">
        {Themes.map((ctheme, i) => {
          return (
            <button
              key={i}
              disabled={theme === ctheme.name}
              onClick={() => handleThemeChange(ctheme.name)}
              className={`rounded-full w-12 h-12 md:w-14 md:h-14 text-transparent m-2 disabled:border-2 disabled:border-info`}
              style={{ backgroundColor: ctheme.color }}
            >
              {ctheme.name} Theme
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
