import Image from "next/image";
import { getPlanetAsProps } from "../../lib/data";
import Content from "@/components/Content";

export default function Neptune({ planet }: { planet: PlanetData }) {
  console.log(planet);
  return <Content planet={planet} />;
}

export async function getStaticProps() {
  const planet = await getPlanetAsProps("neptune");

  return planet;
}
