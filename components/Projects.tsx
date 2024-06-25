import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20">
      <TextGenerateEffect
        className="text-3xl md:text-5xl text-center"
        words="A small selection of Top Projects"
        numberForColor={3}
      />
      <div className="flex flex-wrap items-center justify-center gap-24 mt-14">
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex 
              items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div
                  className="flex justify-center items-center
                 relative sm:w-96 w-[80vw] 
                 overflow-hidden h-[30vh] lg:h-[40vh] mb-10"
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#13162D">
                    <img src="/assets/bg.png" alt="bg image" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <div className="flex flex-col flex-2">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-lg libe-clamp-1">
                    {title}
                  </h1>
                  <p className="lg:text-xl font-normal text-sm line-clamp-2">
                    {des}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => {
                      return (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black 
                          lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center"
                        >
                          <img
                            src={`/assets/${icon}`}
                            alt={icon}
                            className="p-1"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <Link
                      href={link}
                      className="inline-flex items-center gap-1 hover:text-slate-300 transition-colors ease-in-out duration-300"
                    >
                      View Project on{" "}
                      <span className="font-semibold">GitHub</span>
                      <FaLocationArrow className="ml-1" color="#CBACF9" />
                    </Link>
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
