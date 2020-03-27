import Link from 'next/link';
import CheckoutForm from "./CheckoutForm"




function MoreInfo(props) {

return (
  <div>
    <div>
      <img src={props.path} width="50%" height="50%"/>
    </div>

    <div>
      <h1>Size:{props.size}</h1>
      <h1>Price: ${props.price}</h1>
      <Link href="/checkout" title="Home Page">
        <a  >Buy Now</a>
      </Link>
      <CheckoutForm id={props.path} price={props.price}/>
    </div>
  </div>
);

}
export default MoreInfo;
