import Image from "next/image";
import { type ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function VideoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <video
      controls
      autoPlay
      loop
      playsInline
      muted
      className="h-[600px] rounded-(--Radius-Card)"
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
  height = "h-[600px]",
}: {
  src: StaticImport;
  alt: string;
  height?: string;
}) {
  return (
    <Image
      className={`${height} w-auto object-cover rounded-(--Radius-Card)`}
      quality={100}
      src={src}
      alt={alt}
    />
  );
}

export function ImageFullWidth({
  src,
  alt,
}: {
  src: StaticImport;
  alt: string;
}) {
  return (
    <Image
      quality={100}
      className={`w-full object-cover rounded-(--Radius-Card)`}
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
      className={`flex flex-col flex-1 min-[800px]:flex-row justify-center items-center self-stretch px-[24px] gap-8 ${verticalPadding} rounded-(--Radius-Card) ${cardColour}`}
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
      className={`flex flex-col grow items-start self-stretch gap-(--Spacing-Caption)`}
    >
      {children}
      <figcaption>{caption}</figcaption>
    </div>
  );
}

export function GalleryContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col flex-1 lg:flex-row justify-center items-center gap-(--Spacing-Default) self-stretch">
      {children}
    </div>
  );
}
