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
      size={work.size}
      price={work.price}
      sold={work.sold}
    />
  );
}



export default function Art({artwork}) {
  return (
    <Layout title="Art">
      <p>This is the Shop page</p>

            {artwork.map(createCard)}

            <style jsx>{`
              div {
              margin: 0 10%;

              }
              `}</style>


    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
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
