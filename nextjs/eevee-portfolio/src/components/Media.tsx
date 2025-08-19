import Image from "next/image";
import { type ReactNode } from "react";

export function VideoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <video
      className="rounded-(--Radius-Card)"
      controls
      autoPlay
      loop
      playsInline
      muted
      style={{ width: "auto", height: "650px" }}
    >
      <source src={src} type="video/mp4" />
      <track kind="captions" />
      {alt}
    </video>
  );
}

export function ImageCard({
  src,
  alt,
  width = 350,
  height = 650,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      width={width}
      height={height}
      style={{ width: "auto", height: height, objectFit: "cover" }}
      className="rounded-(--Radius-Card)"
      src={src}
      alt={alt}
    />
  );
}

export function ImageFullWidth({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      width={928}
      height={0}
      style={{ width: "100%", height: "auto" }}
      src={src}
      alt={alt}
    />
  );
}

export function GalleryCard({
  isOriginal,
  paddingBottom = true,
  bgColour = "bg-(--Token-Colour-Card)",
  children,
}: {
  isOriginal: boolean;
  paddingBottom?: boolean;
  bgColour?: string;
  children: ReactNode;
}) {
  const cardColour =
    isOriginal === true ? "bg-(--Colour-Background-Neutral)" : bgColour;

  const verticalPadding =
    paddingBottom === true
      ? "py-(--Padding-Gallery)"
      : "pt-(--Padding-Gallery)";

  return (
    <div
      className={`flex flex-col min-[800px]:flex-row justify-center items-center self-stretch gap-8 ${verticalPadding} rounded-(--Radius-Card) ${cardColour}`}
    >
      {children}
    </div>
  );
}

export function Gallery({
  caption,
  children,
  isEqual = false,
}: {
  caption: string;
  children: ReactNode;
  isEqual?: boolean;
}) {
  const flex = isEqual ? "basis-0" : "";
  return (
    <div
      className={`flex flex-col ${flex} grow items-start self-stretch gap-(--Spacing-Caption)`}
    >
      {children}
      <figcaption>{caption}</figcaption>
    </div>
  );
}

export function GalleryContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-(--Spacing-Default) self-stretch">
      {children}
    </div>
  );
}
