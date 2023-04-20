import Image from "next/image";
import { getPlanetAsProps } from "../../lib/data";
import earthMain from "../../public/assets/earth/planet-earth.svg";
import { useState } from "react";
import PlanetImage from "@/components/body/PlanetImage";
import Content from "@/components/Content";

export default function Earth({ planet }: { planet: PlanetData }) {
  console.log(planet);

  return <Content planet={planet} />;
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
