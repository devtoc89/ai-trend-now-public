"use client";

import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/util/style/tailwind.util";
import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

function ThemeButton() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (window) {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    const elBody = document.getElementsByTagName("body")[0];
    if (elBody) {
      if (dark) {
        elBody.classList.add("dark");
      } else {
        elBody.classList.remove("dark");
      }
    }
  }, [dark]);

  const handleOnClick = useCallback(() => {
    setDark((prev) => !prev);
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleOnClick}
      className={cn(dark ? "text-white bg-slate-900 hover:bg-black" : "text-inherit bg-gray-100 hover:bg-white")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

export default ThemeButton;
