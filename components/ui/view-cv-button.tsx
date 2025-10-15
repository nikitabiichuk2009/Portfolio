"use client";
import React from "react";

const CheckCvButton = ({
  title,
  onClick,
  icon,
  position,
}: {
  title: string;
  onClick: () => void;
  icon?: React.ReactNode;
  position?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#9CA3AF_0%,#E5E7EB_50%,#9CA3AF_100%)] opacity-60" />
      <span className="inline-flex h-full w-full cursor-pointer items-center gap-2 justify-center rounded-full bg-slate-800 hover:bg-slate-900 duration-300 ease-in-out px-5 py-1 text-sm font-medium text-slate-200 backdrop-blur-3xl relative z-10">
        {icon && position === "left" && icon}
        {title}
        {icon && position === "right" && icon}
      </span>
    </button>
  );
};

export default CheckCvButton;
