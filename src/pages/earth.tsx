import Image from "next/image";
import { getPlanetAsProps } from "../../lib/data";

export default function Earth({ planet }: { planet: PlanetData }) {
  console.log(planet);

  const planetList = [
    "MERCURY",
    "VENUS",
    "EARTH",
    "MARS",
    "JUPITER",
    "URANUS",
    "NEPTUNE",
  ];

  return (
    <div>
      <div className="flex w-full justify-between h-[85px] px-7 leading-9  border-b-[1px] border-white/[0.2]">
        <h1 className="text-[28px] font-antonio text-white relative top-[22px]">
          THE PLANETS
        </h1>
        <ol className="flex w-[50%] justify-between relative top-[30px]  ">
          {planetList.map((planet) => {
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

      <p>{planet.name}</p>
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
