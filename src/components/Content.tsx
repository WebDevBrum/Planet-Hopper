import { useState } from "react";
import { getPlanetAsProps } from "../../lib/data";
import PlanetImage from "./body/PlanetImage";

const Content = ({ planet }: { planet: PlanetData }) => {
  const [selection, setSelection] = useState("Overview");

  return (
    <div className="h-[100vh]">
      <div className="flex h-[3.125rem] w-full tablet:hidden  bg-lightOrange">
        <button onClick={() => setSelection("Overview")}>OVERVIEW</button>
        <button onClick={() => setSelection("Structure")}>
          INTERNAL STRUCTURE
        </button>
        <button onClick={() => setSelection("Geology")}>SURFACE GEOLOGY</button>
      </div>
      <div className="flex flex-col  desktop:flex-row w-full h-[59.7%] tablet:h-[68%] desktop:h-[73%]">
        <div className=" desktop:w-[65%] h-[53.5%] tablet:h-[65%] desktop:h-[100%] flex justify-center items-center">
          <PlanetImage
            classType={
              "w-[111px] h-[111px] tablet:w-[184px] tablet:h-[184px] desktop:w-[290px] desktop:h-[290px]"
            }
            planet={planet.name.toLowerCase()}
            selection={selection}
          />
        </div>
        <div className="bg-purple flex tablet:flex-row desktop:flex-col desktop:w-[35%] h-[46.5%] tablet:h-[35%] desktop:h-[100%] ">
          {" "}
          <div className="tablet:w-[50%]">
            <p className=" text-white">{planet.name}</p>
            {/* // planet &&
                typeof planet === "object" &&
                selection &&
                selection in planet && */}
            <p className=" text-white">
              {planet[selection.toLowerCase()].content}
            </p>
            <p className=" text-white">{planet.overview.source}</p>
          </div>
          <div className="hidden tablet:flex flex-col">
            <button onClick={() => setSelection("Overview")}>OVERVIEW</button>
            <button onClick={() => setSelection("Structure")}>
              INTERNAL STRUCTURE
            </button>
            <button onClick={() => setSelection("Geology")}>
              SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full   h-[41.4%] tablet:h-[32%] desktop:h-[27%] bg-lightOrange">
        <div>Rotation time</div>
        <div>Revolution time</div>
        <div>Radius</div>
        <div>Average temp</div>
      </div>
    </div>
  );
};

export default Content;
