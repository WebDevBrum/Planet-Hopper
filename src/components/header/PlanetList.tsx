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
            <li
              className="text-[12px]  text-white font-spartanReg  tracking=[1px]"
              key={planet}
            >
              {planet}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default PlanetList;
