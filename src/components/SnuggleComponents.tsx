import { type ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

/* Pain Points Section */
export function PainPoint({
  icon,
  iconAlt,
  painPoint,
  type,
  children,
}: {
  icon: StaticImport;
  iconAlt: string;
  painPoint: string;
  type: "shelter" | "adopter";
  children: ReactNode;
}) {
  const textColour =
    type === "shelter"
      ? "text-(--Colour-Font-Shelter)"
      : "text-(--Colour-Font-Adopter)";

  return (
    <div className="flex items-start gap-[24px] self-stretch">
      <Image width={24} height={24} src={icon} alt={iconAlt} />
      <div className="flex flex-col items-start gap-[8px] flex-[1 0 0]">
        <h6 className={textColour}>{painPoint}</h6>
        <p>{children}</p>
      </div>
    </div>
  );
}

export function PainPoints({
  type,
  children,
}: {
  type: "shelter" | "adopter";
  children: ReactNode;
}) {
  const cardColour =
    type === "shelter"
      ? "bg-(--Colour-Card-Shelter)"
      : "bg-(--Token-Colour-Card)";
  return (
    <div
      className={`flex flex-col items-start p-(--Padding-Card) gap-(--Spacing-Default) ${cardColour} rounded-(--Radius-Card) self-stretch`}
    >
      {children}
    </div>
  );
}

/* Principles Section */
export function Textbox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start self-stretch gap-[8px] flex-1 p-(--Padding-Card) bg-(--Token-Colour-Card) rounded-(--Radius-Card)">
      <h6 className="text-(--Colour-Font-Adopter) text-center self-stretch">
        {title}
      </h6>
      <p>{children}</p>
    </div>
  );
}

/* Process Section */
export function ProcessDescriptionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <ul className="list-disc px-[4px]">{children}</ul>;
}

export function ProcessStep({
  type,
  step,
  children,
}: {
  type: "shelter" | "adopter" | "original";
  step: string;
  children: ReactNode;
}) {
  const cardColour =
    type === "shelter"
      ? "bg-[#B6E7E3]"
      : type === "adopter"
      ? "bg-[#FFE4B2]"
      : type === "original"
      ? "bg-white"
      : "";

  const textColour =
    type === "shelter"
      ? "text-[#0A615B]"
      : type === "adopter"
      ? "text-[#6B5427]"
      : "text-(--Colour-Font-Primary)";

  return (
    <div className="flex flex-col flex-1 items-start gap-[8px] self-stretch">
      <div
        className={`flex items-center justify-center self-stretch p-[16px] ${cardColour} rounded-(--Radius-Card)`}
      >
        <h6 className={textColour}>{step}</h6>
      </div>
      {children}
    </div>
  );
}

export function Process({
  type,
  processTitle,
  children,
}: {
  type: "shelter" | "adopter" | "original";
  processTitle: string;
  children: ReactNode;
}) {
  const textColour =
    type === "shelter"
      ? "text-(--Colour-Font-Shelter)"
      : type === "adopter"
      ? "text-(--Colour-Font-Adopter)"
      : "text-(--Colour-Font-Tertiary)";

  return (
    <div className="flex flex-col items-start self-stretch gap-(--Spacing-Section-Header)">
      <h4 className={textColour}>{processTitle}</h4>
      <div className="flex flex-col min-[1030px]:flex-row justify-center items-start self-stretch gap-[16px]">
        {children}
      </div>
    </div>
  );
}

export function ProcessComparison({
  type,
  children,
}: {
  type: "shelter" | "adopter";
  children: ReactNode;
}) {
  const cardColour =
    type === "shelter"
      ? "bg-(--Colour-Card-Shelter)"
      : "bg-(--Token-Colour-Card)";

  const outlineColour =
    type === "shelter"
      ? "border-(--Colour-Outline-Shelter)"
      : "border-(--Colour-Outline-Adopter)";

  return (
    <div
      className={`flex flex-col items-start p-(--Padding-Card) gap-(--Spacing-Body) rounded-(--Radius-Card) border-solid ${outlineColour} ${cardColour} self-stretch`}
    >
      {children}
    </div>
  );
}
