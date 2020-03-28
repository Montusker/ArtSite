import Card from "../Components/Card";
import fetch from 'node-fetch'
import Layout from "../components/Layout";
import { render } from "react-dom";



function createCard(work) {
  return (
    <Card
      key={work.id}
      id={work.id}
      path={work.path}
      length={work.length}
      width={work.width}
      depth={work.depth}
      price={work.price}
      sold={work.sold}
    />
  );
}



export default function Shop({artwork}) {
  return (
    <Layout title="Shop">
      <p>This is the Shop page</p>

            <div>
            {artwork.map(createCard)}
            </div>
            <style jsx>{`
              div {
              margin: 0 10%;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              }
              `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3000/api/Shopwork')
  const artwork = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      artwork,
    },
  }
}
