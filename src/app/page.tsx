import Link from "next/link";
import Image from "next/image";
import Avatar from "~/public/assets/home/avatar.png";
import SnuggleBanner from "~/public/assets/home/snuggle-banner.png";
import ApothecareBanner from "~/public/assets/home/apothecare-banner.png";
import MALBanner from "~/public/assets/home/myanimelist-banner.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Fira_Code } from "next/font/google";
import * as motion from "motion/react-client";
import { fadeInAnimation, fadeInItemAnimation } from "@/utilities/Animation";

const FiraCode = Fira_Code({
  subsets: ["latin"],
  variable: "--Fira-Code",
});

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
    <motion.div
      className={`${project} flex flex-col flex-1 lg:flex-row items-center justify-center self-stretch h-auto lg:h-[256px] overflow-hidden
      shadow-[2px_4px_8px_rgba(107,84,39,0.10)] rounded-(--Radius-Card)`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
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
    </motion.div>
  );
}

function Intro() {
  return (
    <motion.div
      className="flex flex-col md:flex-row flex-1 items-start self-stretch gap-[48px]"
      variants={fadeInItemAnimation}
    >
      <Image
        src={Avatar}
        alt="Picture of me!"
        className=" w-[208px] h-[208px]"
      />
      <div className="flex flex-col flex-1 gap-[24px] items-start self-stretch justify-between">
        <div className="flex flex-col justify-center items-start gap-[8px]">
          <h1 className="text-(--Colour-Font-Primary)">hi, i&apos;m Evelyn!</h1>
          <span className={`text-[0.75rem]/[100%] ${FiraCode.className}`}>
            (i designed and coded this website myself)!
          </span>
          {/* <p className="uppercase font-semibold leading-[100%] tracking-[1.28px] text-(--Colour-Font-Tertiary)">
            my friends call me eevee (like the pokemon).
          </p> */}
        </div>
        <div className="flex flex-col gap-[16px]">
          <p className="text-(--Colour-Font-Secondary)">
            {/* you can also call me eevee (like the pokemon) . <br /> */}
            i&apos;m a{" "}
            <b className="hover:bg-[#fff3cf] underline underline-offset-2 decoration-dotted transition ease-in-out duration-300">
              designer
            </b>{" "}
            with a bachelors in{" "}
            <b className="hover:bg-[#fff3cf] underline underline-offset-2 decoration-dotted transition ease-in-out duration-300">
              compsci
            </b>{" "}
            from uwaterloo .
            <br /> my superpowers include empathy and inhaling new skills like
            kirby .{" "}
          </p>

          <figcaption>
            i&apos;m also a <s>hoarder</s> collector of a variety of things,
            have way too many hobbies, and overuse peace sign poses in photos .
          </figcaption>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <motion.div
      className="flex flex-col self-stretch items-start mx-8 md:mx-16 lg:mx-auto max-w-[928px] py-[128px] gap-(--Spacing-Sections)"
      variants={fadeInAnimation}
      initial="initial"
      animate="animate"
    >
      <Intro />
      <motion.div
        className="flex flex-col flex-1 self-stretch gap-[24px]"
        variants={fadeInItemAnimation}
      >
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
      </motion.div>
    </motion.div>
  );
}
