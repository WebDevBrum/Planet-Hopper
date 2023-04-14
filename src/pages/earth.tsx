import Image from "next/image";
import { getPlanetAsProps } from "../../lib/data";

export default function Earth({ planet }: { planet: EarthData }) {
  console.log(planet);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome home earthling</h1>
      <p>{planet.name}</p>
    </main>
  );
}

export { getPlanetAsProps as getStaticProps };

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
