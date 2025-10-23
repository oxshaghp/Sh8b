"use client";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div>
        <Button variant="outline" disabled>
          <SunIcon className="size-4" />
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button variant="outline" onClick={toggleTheme}>
        <SunIcon className="size-4 dark:hidden" />
        <MoonIcon className="size-4 hidden dark:block" />
      </Button>
    </div>
  );
}

export default ThemeButton;
