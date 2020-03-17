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
    <Layout>
      <p>This is the Shop page</p>

      <div className="container-fluid d-inline-flex p-2 bd-highlight">
        <div className="row rows-cols-4">
        {artwork.map(createCard)}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/Shopwork')
  const artwork = await res.json()


  return {
    props: {
      artwork,
    },
  }
}
