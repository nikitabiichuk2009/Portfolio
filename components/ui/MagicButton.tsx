"use client";
import React from "react";

const MagicButton = ({
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
      className="inline-flex h-14 animate-shimmer items-center justify-center gap-2 rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 hover:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      {icon && position === "left" && icon}
      {title}
      {icon && position === "right" && icon}
    </button>
  );
};

export default MagicButton;
