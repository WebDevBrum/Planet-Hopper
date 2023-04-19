import Image from "next/image";
import burger from "../../../public/assets/shared/icon-hamburger.svg";
import { useEffect, useState } from "react";
import PlanetRow from "./PlanetRow";
import PlanetList from "./PlanetList";
import { useRouter } from "next/router";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const planetList: string[] = [
    "MERCURY",
    "VENUS",
    "EARTH",
    "MARS",
    "JUPITER",
    "URANUS",
    "NEPTUNE",
  ];

  useEffect(() => {
    const handleRouteChange = () => {
      setMenu(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <div className="flex tablet:flex-col desktop:flex-row w-full justify-between tablet:align-middle  desktop:justify-between desktop:h-[5.3rem] desktop:px-7 leading-9  border-b-[1px] border-white/[0.2] ">
        <div className="px-6 py-4 tablet:text-center  tablet:p-7 desktop:p-0 desktop:relative top-[1.375rem] text-[1.75rem] font-antonio text-white ">
          <h1>THE PLANETS</h1>
        </div>
        <div className={`tablet:hidden text-white px-6 py-4 hover:opacity-75`}>
          <Image
            src={burger}
            alt={"dropdown"}
            width={24}
            height={17}
            onClick={() => setMenu(!menu)}
            className={`inline-block ${menu && "opacity-75"}`}
          />
        </div>
        <PlanetRow planets={planetList} />
      </div>
      <PlanetList planets={planetList} menu={menu} />
    </div>
  );
};

export default Header;
