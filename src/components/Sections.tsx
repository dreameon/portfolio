import { type ReactNode } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation, fadeInItemAnimation } from "@/utilities/Animation";

export function Subsection({
  subsectionTitle,
  children,
}: {
  subsectionTitle: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start self-stretch gap-(--Spacing-Section-Header)">
      <h4>{subsectionTitle}</h4>
      {children}
    </div>
  );
}

export function Section({
  sectionTitle,
  children,
}: {
  sectionTitle: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={fadeInItemAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col items-start self-stretch mx-8 md:mx-16 lg:mx-auto max-w-[928px] gap-(--Spacing-Section-Header)"
    >
      <motion.h2>{sectionTitle}</motion.h2>
      <motion.div className="flex flex-col items-start self-stretch gap-(--Spacing-Body-Mobile) md:gap-(--Spacing-Body)">
        {children}
      </motion.div>
    </motion.div>
  );
}

export function ParagraphBlock({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-(--Spacing-Section-Header) self-stretch">
      {children}
    </div>
  );
}
