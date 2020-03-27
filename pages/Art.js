import Card from "../Components/Card";
import fetch from 'node-fetch'
import Layout from "../components/Layout";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";



export default function Art({artwork}) {
  const imageRenderer = React.useCallback(
    ({ index, left, top, key, photo }) => (
      <Card
        _id={artwork[index]._id}
        id={artwork[index].IDNumber}
        path={artwork[index].src}
        size={artwork[index].size}
        price={artwork[index].price}
        sold={artwork[index].sold}
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
      )
    );

  return (
    <Layout>
    <p>This is the Art page</p>
      <div>
      <Gallery className="test" photos={artwork} renderImage={imageRenderer}/>
      </div>
      <style jsx>{`
        div {
        margin: 0 10%;
        }
        `}</style>

    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/artwork')
  const artwork = await res.json()

  return {
    props: {
      artwork,
    },
  }
}
