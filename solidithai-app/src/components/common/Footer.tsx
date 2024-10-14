import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full h-20 flex justify-center items-center border-t-2 gap-2">
      <span>Please login to use application </span>
      <ThemeSwitcher />
    </div>
  );
}
