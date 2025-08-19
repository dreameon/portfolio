import Link from "next/link";
import Image from "next/image";

function ProjectCard({
  bannerImgSrc,
  project,
  projectTitle,
}: {
  bannerImgSrc: string;
  project: string;
  projectTitle: string;
}) {
  return (
    <div
      className={`${project} flex items-center shadow-[2px_4px_8px_rgba(107,84,39,0.10)] justify-center self-stretch h-[256px] rounded-(--Radius-Card) overflow-hidden`}
    >
      <Image
        width={1440}
        height={640}
        src={bannerImgSrc}
        style={{ width: "auto", height: "auto", objectFit: "cover" }}
        alt={`Banner image for ${project} project`}
      />
      <div className="flex items-center justify-center self-stretch w-[320px] bg-(--Token-Colour-Project-Specs)">
        <h4>{projectTitle}</h4>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="flex flex-col grow items-start md:flex-row self-stretch gap-[48px] py-[64px]">
      <Image
        width={208}
        height={208}
        src="/assets/home/avatar.svg"
        alt="Avatar"
      />
      <div className="flex flex-col gap-[32px] grow items-start self-stretch">
        <div className="flex flex-col justify-center items-start gap-[16px]">
          <h1 className="text-(--Colour-Font-Primary)">Hi, I&apos;m Evelyn!</h1>
          <h4>my friends call me eevee (like the pokemon).</h4>
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="text-(--Colour-Font-Secondary)">
            i&apos;m an artist with a bachelors in compsci. <br />i speak both
            design and code.
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
    <div className="flex flex-col items-start  mx-8 md:mx-16 lg:mx-auto max-w-[928px] self-stretch ">
      <Intro />
      <div className="flex flex-col py-[48px] gap-[24px]">
        <h2>my works</h2>
        <div className="flex flex-col items-start self-stretch gap-[48px]">
          <Link href="/work/snuggle">
            <ProjectCard
              bannerImgSrc="/assets/home/snuggle-banner.svg"
              project="snuggle"
              projectTitle="Snuggle"
            ></ProjectCard>
          </Link>
          <Link href="/work/apothecare">
            <ProjectCard
              bannerImgSrc="/assets/home/apothecare-banner.svg"
              project="apothecare"
              projectTitle="Apothecare"
            ></ProjectCard>
          </Link>
          <Link href="/work/myanimelist">
            <ProjectCard
              bannerImgSrc="/assets/home/myanimelist-banner.svg"
              project="myanimelist"
              projectTitle="MyAnimeList (Redesign)"
            ></ProjectCard>
          </Link>
        </div>
      </div>
    </div>
  );
}
