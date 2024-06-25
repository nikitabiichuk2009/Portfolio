"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    return age;
  };

  const age = calculateAge("2009-06-30");
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32
           md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-1 left-full h-[80vh] w-[90vw]"
          fill="purple"
        />
        <Spotlight
          className="top-30 left-full h-screen w-[40vh] md:w-[60bw]"
          fill="yellow"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen absolute top-0 left-0 w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w[60vw] flex flex-col justify-center items-center">
          <div className="size-44 md:size-48 lg:size-56 rounded-full overflow-hidden mb-6">
            <Image
              src="/avatar.png"
              alt="Nikita Biichuk's photo"
              width={250}
              height={250}
              objectFit="cover"
            />
          </div>
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80 text-center">
            A {age}-year old teeneger who loves coding.
          </h2>
          <TextGenerateEffect
            className="text-3xl md:text-5xl text-center"
            words="Nikita Biichuk's Portfolio"
            numberForColor={1}
          />
          <p className="text-center md:tracking-wider mb-4 text-lg font-normal text-white">
            Hi! I am Nikita, a full stack web developer based in Ukraine.
          </p>
          <MagicButton
            title="See my work"
            onClick={scrollToProjects}
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
