"use client";

import { Button } from "@Himal-Refrigeration/ui/components/button";
import { Moon, Sun } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const currentTheme = theme || "system";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  const handleClick = () => {
    setTheme(nextTheme);
  };

  useEffect(() => {
    if (!iconRef.current) return;

    gsap.fromTo(
      iconRef.current,
      { rotate: 0, opacity: 1 },
      { rotate: 360, opacity: 0.5, duration: 0.6, ease: "power2.out" }
    );
  }, [currentTheme]);

  const getIcon = () => {
    return currentTheme === "dark" ? (
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem]" />
    );
  };

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size="icon"
      onClick={handleClick}
      title={`Toggle ${nextTheme} mode`}
      className="relative rounded-md bg-blue-500/20 hover:bg-blue-500/30 dark:bg-red-600/30 dark:hover:bg-red-600/40 border-blue-300/40 dark:border-red-500/40 backdrop-blur-md"
    >
      <div ref={iconRef} className="text-blue-600 dark:text-red-500">{getIcon()}</div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
