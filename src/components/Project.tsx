import { ProjectSynopsis } from "./ProjectSynopsis";
import { PropsWithChildren, type ReactNode } from "react";
import Image from "next/image";

function ProjectSample({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col items-center self-stretch px-8 bg-(--Token-Colour-Card)">
      <Image
        width="1184"
        height="0"
        sizes="100vw"
        className="w-full lg:max-w-[1184px] h-auto"
        src={src}
        alt={alt}
      />
    </div>
  );
}

function Banner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col object-cover justify-center overflow-hidden px-[128px] items-center self-stretch h-[500px] bg-(--Token-Colour-Banner-Background)">
      <Image
        width="928"
        height="900"
        sizes="100vw"
        className="max-w-[928px] h-auto"
        src={src}
        alt={alt}
      />
    </div>
  );
}

function ProjectTitle({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-start mx-8 md:mx-16 lg:mx-auto lg:min-w-[928px]  gap-[8px] self-stretch">
      <div className="flex pr-[64px] justify-center items-center gap-[10px] border-b-[4px] border-solid border-(--Token-Colour-Border)">
        <h1 className="text-[3rem] lg:text-[4rem]">{children}</h1>
      </div>
    </div>
  );
}

export default function Project({
  title,
  bannerSrc,
  sampleSrc,
  overview,
  role,
  roleBreakdown,
  projectTime,
  prototypeLink,
  children,
}: {
  title: string;
  bannerSrc: string;
  sampleSrc: string;
  overview: string[];
  role: string;
  roleBreakdown: string;
  projectTime: string;
  prototypeLink: string;
  children: ReactNode;
}) {
  return (
    <div className="project flex flex-col">
      <Banner src={bannerSrc} alt={`Banner for ${title} project`} />
      <div className="flex py-(--Spacing-Sections) flex-col items-start gap-(--Spacing-Sections) self-stretch">
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSynopsis
          overview={overview}
          role={role}
          roleBreakdown={roleBreakdown}
          projectTime={projectTime}
          prototypeLink={prototypeLink}
        />
        <ProjectSample
          src={sampleSrc}
          alt={`Sample screens for ${title} project`}
        />
        {children}
      </div>
    </div>
  );
}
