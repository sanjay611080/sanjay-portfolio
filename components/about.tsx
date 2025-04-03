"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating from 12th grade with a focus on Science, I decided to pursue my career in programming by enrolling in a BCA and later an MCA. I have completed several bootcamps and am eager to solve problems and find solutions that help people build their online presence.
</p>

<p>
  <span className="italic">In my free time</span>, I enjoy doing freelance work and playing problem-solving games like chess and sudoku. I am always looking to enhance my skills and knowledge in technology.
</p>

    </motion.section>
  );
}
