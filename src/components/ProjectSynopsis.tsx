import { PropsWithChildren } from "react";

function Overview({ overview }: { overview: string[] }) {
  return (
    <div className="flex flex-col flex-1 items-start py-(--Padding-Card) gap-[8px] self-stretch">
      <h4>Overview</h4>
      <p>{overview[0]}</p>
      <i>{overview[1]}</i>
    </div>
  );
}

function Role({
  role,
  roleBreakdown,
}: {
  role: string;
  roleBreakdown: string;
}) {
  return (
    <div className="flex flex-col justify-center items-start gap-[8px] self-stretch">
      <h4>Role</h4>
      <b>{role}</b>
      <p>{roleBreakdown}</p>
    </div>
  );
}

function ProjectTime({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-start gap-[8px] self-stretch">
      <h4>Project Time</h4>
      <p>{children}</p>
    </div>
  );
}

function ProjectSpecs({
  role,
  roleBreakdown,
  projectTime,
  prototypeLink,
}: {
  role: string;
  roleBreakdown: string;
  projectTime: string;
  prototypeLink: string;
}) {
  return (
    <div className="flex flex-col flex-1 items-start p-(--Padding-Card) gap-[32px] self-stretch bg-(--Token-Colour-Project-Specs) border-[2px] border-(--Token-Colour-Card-Outline) rounded-(--Radius-Card)">
      <Role role={role} roleBreakdown={roleBreakdown}></Role>
      <ProjectTime>{projectTime}</ProjectTime>
      <a className="underline" href={prototypeLink}>
        Prototype Link
      </a>
    </div>
  );
}

export function ProjectSynopsis({
  overview,
  role,
  roleBreakdown,
  projectTime,
  prototypeLink,
}: {
  overview: string[];
  role: string;
  roleBreakdown: string;
  projectTime: string;
  prototypeLink: string;
}) {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-start mx-8 md:mx-16 lg:mx-auto max-w-[928px] gap-(--Spacing-Synopsis) self-stretch">
      <Overview overview={overview} />
      <ProjectSpecs
        role={role}
        roleBreakdown={roleBreakdown}
        projectTime={projectTime}
        prototypeLink={prototypeLink}
      ></ProjectSpecs>
    </div>
  );
}
