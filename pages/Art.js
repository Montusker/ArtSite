import Card from "../Components/Card";
import fetch from 'node-fetch'
import Layout from "../components/Layout";

function createCard(work) {
  return (
    <Card
      key={work.id}
      id={work.id}
      path={work.path}
      size={work.size}
      price={work.price}
      sold={work.sold}
    />
  );
}



export default function Shop({artwork}) {
  return (
    <Layout title="Artwork">
      <p>This is the Artwork page</p>

      <div className="container-fluid d-inline-flex p-2 bd-highlight">
        <div className="row rows-cols-4">
        {artwork.map(createCard)}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('http://localhost:3000/api/artwork')
  const artwork = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      artwork,
    },
  }
}
