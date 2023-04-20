import Image from "next/image";
import { images } from "./planetImageCollection";

const PlanetImage = ({
  planet,
  classType,
  selection,
}: {
  planet: string;
  classType: string;
  selection: string;
}) => {
  const imgSrc =
    selection !== "Geology"
      ? images[planet + selection]
      : images[planet + "Overview"];

  const geology = images[planet + "Geology"];

  return (
    <div className={classType}>
      <Image src={imgSrc} alt={"dropdown"} />

      {selection === "Geology" && (
        <div className="flex justify-center relative top-[-35px] tablet:top-[-60px] desktop:top-[-90px]">
          <div
            className={
              "w-[61px] h=[75px]  tablet:w-[102px] tablet:h-[125px]  desktop:w-[163px] desktop:h-[199px] "
            }
          >
            <Image src={geology} alt={"dropdown"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanetImage;
