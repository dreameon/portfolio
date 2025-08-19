import { type ReactNode } from "react";

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
    <div className="flex flex-col items-start self-stretch mx-8 md:mx-16 lg:mx-auto max-w-[928px] gap-(--Spacing-Section-Header)">
      <h2>{sectionTitle}</h2>
      <div className="flex flex-col items-start self-stretch gap-(--Spacing-Body)">
        {children}
      </div>
    </div>
  );
}

export function ParagraphBlock({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-(--Spacing-Section-Header) self-stretch">
      {children}
    </div>
  );
}
