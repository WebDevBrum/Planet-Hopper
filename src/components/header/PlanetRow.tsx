const PlanetRow = ({ planets }: { planets: string[] }) => {
  return (
    <div className="desktop:w-[50%] px-14 pb-4 desktop:px-0 desktop:pb-0 tablet:block hidden">
      <ol className=" flex  justify-between desktop:relative top-[30px]  ">
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

export default PlanetRow;
