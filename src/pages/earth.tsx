import Image from "next/image";
import { getPlanetAsProps } from "../../lib/data";
import earthMain from "../../public/assets/earth/planet-earth.svg";

export default function Earth({ planet }: { planet: PlanetData }) {
  console.log(planet);

  return (
    <div className="h-[100vh]">
      <div className="flex h-[3.125rem] w-full tablet:hidden  bg-lightOrange">
        <button>OVERVIEW</button>
        <button>INTERNAL STRUCTURE</button>
        <button>SURFACE GEOLOGY</button>
      </div>
      <div className="flex flex-col  desktop:flex-row w-full h-[59.7%] tablet:h-[68%] desktop:h-[73%]">
        <div className=" desktop:w-[65%] h-[53.5%] tablet:h-[65%] desktop:h-[100%] flex justify-center items-center">
          <div className="w-[111px] h-[111px] tablet:w-[184px] tablet:h-[284px] desktop:w-[290px] desktop:h-[290px]">
            <Image
              src={earthMain}
              alt={"dropdown"}
              // width={290}
              // height={290}

              // onClick={() => setMenu(!menu)}
              // className={`inline-block ${menu && "opacity-75"}`}
            />
          </div>
        </div>
        <div className="bg-purple flex tablet:flex-row desktop:flex-col desktop:w-[35%] h-[46.5%] tablet:h-[35%] desktop:h-[100%] ">
          {" "}
          <div className="tablet:w-[50%]">
            <p className=" text-white">{planet.name}</p>
            <p className=" text-white">{planet.overview.content}</p>
            <p className=" text-white">{planet.overview.source}</p>
          </div>
          <div className="hidden tablet:flex flex-col">
            <button>OVERVIEW</button>
            <button>INTERNAL STRUCTURE</button>
            <button>SURFACE GEOLOGY</button>
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
}

export async function getStaticProps() {
  const planet = await getPlanetAsProps("earth");

  return planet;
}

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch("http://localhost:5000/planets/earth");
//   const planetData = await res.json();
//   const planet: EarthData = planetData.data;
//   // console.log(posts);

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       planet,
//     },
//   };
// }
