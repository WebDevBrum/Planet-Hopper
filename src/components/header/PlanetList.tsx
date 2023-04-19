import Link from "next/link";

const PlanetList = ({
  planets,
  menu,
}: {
  planets: string[];
  menu: boolean;
}) => {
  return (
    <div
      className={`${
        !menu && "hidden"
      } fixed top-[70px] w-full h-full tablet:hidden  bg-primeBlack`}
    >
      <ol className=" flex  flex-col justify-between h-[80%] p-7 ">
        {planets.map((planet) => {
          return (
            <Link href={`/${planet.toLowerCase()}`} key={planet}>
              <li
                className="text-[0.75rem]  text-white font-spartanReg  tracking=[1px]"
                key={planet}
              >
                {planet}
              </li>
            </Link>
          );
        })}
      </ol>
    </div>
  );
};

export default PlanetList;
