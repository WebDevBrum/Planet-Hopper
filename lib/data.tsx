export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:5000/planets/earth");
  const props = await res.json();

  // console.log(posts);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      props,
    },
  };
}

export async function getPlanetAsProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:5000/planets/earth");
  const planetData = await res.json();
  const planet: EarthData = planetData.data;
  // console.log(posts);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      planet,
    },
  };
}
