"use client";
import { type ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { DropdownMenu } from "radix-ui";

function NavElement({
  paths,
  path,
  children,
}: {
  paths: string[];
  path: string;
  children: ReactNode;
}) {
  const style = paths.includes(path)
    ? "underline text-(--Colour-Font-Primary)"
    : "text-(--Colour-Font-Tertiary)";
  return (
    <div
      className={`flex justify-center items-center py-[24px] ${style} hover:text-(--Colour-Font-Primary) transition ease-in-out duration-300`}
    >
      {children}
    </div>
  );
}

// TO-DO: Build drop-down for nav-bar
function NavProject({ href, children }: { href: string; children: ReactNode }) {
  return (
    <DropdownMenu.Item asChild>
      <Link
        href={href}
        className="flex self-stretch justify-center items-center px-[32px] py-[16px]
      font-[Mulish] text-[0.75rem]/[1rem] tracking-[0.96px] uppercase text-(--Colour-Font-Tertiary)
       bg-white hover:bg-[#EDEDED] hover:text-(--Colour-Font-Secondary) no-underline
    active:bg-[#EDEDED] active:text-(--Colour-Font-Secondary) transition ease-in-out duration-300"
      >
        {children}
      </Link>
    </DropdownMenu.Item>
  );
}

function DropDown() {
  const path = usePathname();

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  function handleMouseEnter() {
    setDropdownVisible(true);
  }

  function handleMouseLeave() {
    setDropdownVisible(false);
  }

  return (
    <div onMouseLeave={handleMouseLeave}>
      <DropdownMenu.Root
        open={isDropdownVisible}
        onOpenChange={setDropdownVisible}
        modal={false}
      >
        <DropdownMenu.Trigger onMouseOver={handleMouseEnter}>
          <NavElement
            paths={["/work/snuggle", "/work/apothecare", "/work/myanimelist"]}
            path={path}
          >
            work
          </NavElement>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="md:right-auto w-[256px] border border-solid border-[#EDEDED]">
          <NavProject href="/work/snuggle">snuggle</NavProject>
          <NavProject href="/work/apothecare">apothecare</NavProject>
          <NavProject href="/work/myanimelist">myanimelist</NavProject>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}

export default function NavBar() {
  const path = usePathname();

  // TO-DO: implement dropdown click
  // function handleDropDownClick() {
  //   setDropdownVisible(true);
  // };

  return (
    <div className="w-full flex self-stretch px-8 md:px-16 lg:px-auto pt-[24px] justify-center sticky z-10 top-0 bg-white shadow-[2px_4px_8px_0px_rgba(107,84,39,0.10)]">
      <div className="flex flex-row flex-1 self-stretch justify-between items-center max-w-[928px]">
        <div className="">
          <p className="text-(--Colour-Font-Secondary)">evelyn law</p>
        </div>
        <nav className="self-stretch flex flex-row justify-start items-center gap-[24px] lg:gap-[48px]">
          <NavElement paths={["/"]} path={path}>
            <Link href="/">home</Link>
          </NavElement>
          <DropDown />
        </nav>
      </div>
    </div>
  );
}
