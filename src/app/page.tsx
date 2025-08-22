import Link from "next/link";
import Image from "next/image";
import Avatar from "~/public/assets/home/avatar.png";
import SnuggleBanner from "~/public/assets/home/snuggle-banner.png";
import ApothecareBanner from "~/public/assets/home/apothecare-banner.png";
import MALBanner from "~/public/assets/home/myanimelist-banner.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function ProjectCard({
  bannerImgSrc,
  project,
  projectTitle,
}: {
  bannerImgSrc: string | StaticImport;
  project: string;
  projectTitle: string;
}) {
  return (
    <div
      className={`${project} flex flex-col flex-1 lg:flex-row items-center justify-center self-stretch h-auto lg:h-[256px] overflow-hidden
      shadow-[2px_4px_8px_rgba(107,84,39,0.10)] rounded-(--Radius-Card)`}
    >
      <div className="">
        <Image
          src={bannerImgSrc}
          className=""
          alt={`Banner image for ${project} project`}
        />
      </div>
      <div className="flex items-center justify-center self-stretch min-w-[256px] py-[24px] bg-(--Token-Colour-Project-Specs)">
        <h4>{projectTitle}</h4>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="flex flex-col md:flex-row flex-1 items-start self-stretch gap-[48px]">
      <Image
        src={Avatar}
        alt="Picture of me!"
        className="w-[208px] h-[208px]"
      />
      <div className="flex flex-col flex-1 gap-[32px] items-start self-stretch">
        <div className="flex flex-col justify-center items-start gap-[24px] md:gap-[16px]">
          <h1 className="text-(--Colour-Font-Primary)">Hi, I&apos;m Evelyn!</h1>
          <h4>my friends call me eevee (like the pokemon).</h4>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="text-(--Colour-Font-Secondary)">
            i&apos;m an <b>artist</b> with a bachelors in <b>compsci</b> from
            uwaterloo.
            <br />i speak both design and code.
          </p>

          <figcaption>
            i&apos;m also a <s>hoarder</s> collector of a variety of things,
            have way too many hobbies, and overuse peace sign poses in photos.
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col self-stretch items-start mx-8 md:mx-16 lg:mx-auto max-w-[928px] py-[64px] gap-(--Spacing-Sections)">
      <Intro />
      <div className="flex flex-col flex-1 self-stretch gap-[24px]">
        <h2>my works</h2>
        <div className="flex flex-col flex-1 items-start self-stretch gap-[48px]">
          <Link href="/work/snuggle" className="flex flex-1 self-stretch">
            <ProjectCard
              bannerImgSrc={SnuggleBanner}
              project="snuggle"
              projectTitle="Snuggle"
            ></ProjectCard>
          </Link>
          <Link href="/work/apothecare" className="flex flex-1 self-stretch">
            <ProjectCard
              bannerImgSrc={ApothecareBanner}
              project="apothecare"
              projectTitle="Apothecare"
            ></ProjectCard>
          </Link>
          <Link href="/work/myanimelist" className="flex flex-1 self-stretch">
            <ProjectCard
              bannerImgSrc={MALBanner}
              project="myanimelist"
              projectTitle="MyAnimeList (Redesign)"
            ></ProjectCard>
          </Link>
        </div>
      </div>
    </div>
  );
}
