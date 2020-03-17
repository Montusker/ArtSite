import Popup from "reactjs-popup";
import MoreInfo from "./MoreInfo";



function Card(props) {
  return (

    <div className="col-3">
    <Popup modal trigger={<button><img className="thumbnail" src={props.path} /></button>}>
    <MoreInfo
      key={props.id}
      id={props.id}
      description={props.description}
      path={props.path}
      size={props.size}
      price={props.price}
      sold={props.sold}
    />
    </Popup>
     <style jsx>{`
       .thumbnail {
         width: 100%;
         height: 100%;
       }
       `}</style>
    </div>

  );
}

export default Card;
