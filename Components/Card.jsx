import Popup from "reactjs-popup";
import MoreInfo from "./MoreInfo";



function Card(props) {

  const [isCircle, setCircle] = React.useState(false);


function handleLoad() {
  if (props.path === "images/IMG_0006.jpg"){
      setCircle(true);
    }
    else {
      setCircle(false);
    }
}


  return (

    <div onResize={handleLoad} style={{ borderRadius: isCircle ? "50%" : "0" }}>
    <Popup modal trigger={<img src={props.path}  height={props.height *20 } width={props.width *20 } />}>
    <MoreInfo
      _id={props._id}
      id={props.id}
      path={props.path}
      size={props.size}
      price={props.price}
      sold={props.sold}
    />
    </Popup>
    <style jsx>{`
      div {
      margin: 30px;
      padding: auto;
      justify-self: center;
      align-self: center;
      -webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
      -moz-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
      box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
      }

      `}</style>
    </div>


  );
}

export default Card;
