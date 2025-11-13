import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";

const MyWorkExperience = () => {
  return (
    <div className="pb-20">
      <h1 className="text-3xl md:text-5xl text-center font-bold text-white">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="w-full mt-12 flex items-center justify-center">
        {workExperience.map((exp) => {
          return (
            <Button
              key={exp.id}
              duration={6000}
              className="flex-1 text-white border-neutral-300 dark:border-slate-800"
            >
              <div
                className="flex lg:flex-row flex-col 
							lg:items-center md:gap-5
							 lg:gap-10 gap-2 p-10 py-6 md:p-8 lg:p-10"
              >
                <img
                  src={exp.thumbnail}
                  alt={exp.thumbnail}
                  className="lg:w-12 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold cursor-text select-text">
                    {exp.title}
                  </h1>
                  {exp.company && (
                    <h2 className="text-start text-base md:text-lg font-semibold text-purple mt-1 cursor-text select-text">
                      {exp.company}
                    </h2>
                  )}
                  <p className="text-start font-semibold text-white-100 mt-3 cursor-text select-text">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorkExperience;
