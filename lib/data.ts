import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ani from "@/public/ani.png";
import helli from "@/public/helli.png";
import cadd from "@/public/cadd.png";
import codelib from "@/public/codelib.png";
import quiz from "@/public/quiz.png";
import minischool from "@/public/minischool.png";
import { link } from "fs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Software Engineer",
    location: "IIT Delhi",
    description:
      "Working as a Software Engineer Intern, gaining expertise in both front-end and back-end technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
  {
    title: "Software Engineer",
    location: "Gurugram, Haryana",
    description:
      "I worked as a Software Engineer Intern for 6 months, where I honed my skills, expanding my expertise across the entire development stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Freelance Developer",
    location: "Delhi",
    description:
      "As a freelance full-stack developer, I leverage technologies like React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB to build robust applications for clients. In my free time, I enjoy working on personal projects and exploring new technologies.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;


export const projectsData = [
  {
    title: "Minischool",
    description:
      "Minischool is an online learning platform designed to make distance education more engaging and accessible. It offers complete courses, study resources, quizzes, assignments, and progress tracking—providing a smooth and interactive learning experience for students.",
    imageUrl: minischool,
    link: "http://minischool.site/",
  },

  {
    title: "Quiz Set",
    description:
      "QuizSet is a quiz-taking platform featuring auto-check functionality and live tracking of quiz participants, ensuring real-time monitoring of who has access and whether their links are active.",
    // tags: ["Angular", "Firebase", "Tailwind", "Material UI", "Bitly", "Embla Carousel", "Typescript", "Github", "Docker"],
    imageUrl: quiz,
    link: "https://quizset.vercel.app/",
  },
  {
    title: "Helli Studio",
    description:
      "Helli Studio is an IT services platform built for my client, providing various technology solutions and services tailored to their needs.",
    // tags: ["Next.js", "MongoDB", "Tailwind", "Material UI", "Figma", "Embla Carousel", "Typescript"],
    imageUrl: helli,
    link: "https://hellistudios.vercel.app/",
  },
  {
    title: "Cadd Manchester",
    description:
      "Cadd Manchester is an educational academy web platform designed to showcase various courses. I built this project for my client to enhance their online presence.",
    // tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: cadd,
    link: "https://cadd-manchester.vercel.app/",
  },
  {
    title: "AniBowl",
    description:
      "AniBowl is a fundraising platform dedicated to feeding street animals, allowing users to make donations and share their stories about animal welfare.",
    // tags: ["Angular", "MongoDB", "Tailwind", "Typescript", "Razorpay", "Material UI"],
    imageUrl: ani,
    link: "https://ani-bowl.vercel.app/",
  },
  {
    title: "Codelib",
    description:
      "Codelib is an educational community platform where users can share code snippets, solutions to various questions, and access free notes for their studies.",
    tags: ["Angular", "Typescript", "Tailwind", "Firebase"],
    imageUrl: codelib,
    link: "https://code-lib.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "MySQL",
  "Framer",
  "Arduino",
  "Express",
  "Docker",
  "Python",
  "Angular",
  "Framer Motion",
  "TypeScript",
] as const;
