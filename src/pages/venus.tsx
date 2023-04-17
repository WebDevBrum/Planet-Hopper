import Image from "next/image";
import { getPlanetAsProps } from "../../lib/data";

export default function Venus({ planet }: { planet: PlanetData }) {
  console.log(planet);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to </h1>
      <p>{planet.name}</p>
    </main>
  );
}

export async function getStaticProps() {
  const planet = await getPlanetAsProps("venus");

  return planet;
}
