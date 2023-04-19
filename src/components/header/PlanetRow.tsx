import Link from "next/link";

const PlanetRow = ({ planets }: { planets: string[] }) => {
  return (
    <div className="desktop:w-[50%] px-14 pb-4 desktop:px-0 desktop:pb-0 tablet:block hidden">
      <ol className=" flex  justify-between desktop:relative top-[1.875rem]  ">
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

export default PlanetRow;
