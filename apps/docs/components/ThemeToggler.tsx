"use client";

import { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

export const ThemeToggler = () => {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  });

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <>
      <button
        className="text-primary cursor-pointer border-[1.5px] border-muted-foreground h-9 w-9 rounded-[14px]"
        onClick={toggleTheme}
      >
        {isDark ? (
          <div className="hover:-rotate-20 transition-transform duration-200 ease-in-out">
            <i className="ri-sun-fill text-xl"></i>
          </div>
        ) : (
          <div className="hover:-rotate-12 transition-transform duration-200 ease-in-out">
            <i className="ri-moon-clear-fill text-xl "></i>
          </div>
        )}
      </button>
    </>
  );
};
