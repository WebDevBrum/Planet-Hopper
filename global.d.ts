interface Details {
  content: string;
  source: string;
}

interface Images {
  planet: string;
  internal: string;
  geology: string;
}

interface PlanetData {
  _id: string;
  name: string;
  overview: Details;
  structure: Details;
  geology: Details;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
  [key: string]: any;
}

// alternative here could be

// interface PlanetData {
//   [key: string]: string | object;
// }
