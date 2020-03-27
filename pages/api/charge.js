import Stripe from "stripe";
import ArtDB from './Database/ArtDB';
import Art from './Database/Art';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export default async (req, res) => {
  await ArtDB();

  let { id, amount, item_id} = req.body;




  Art.findOne({ path: item_id }, (err, foundItems)=> {
      if (err) {
        console.log(err);
      } else {
        amount = foundItems.price*100;
      }
    });


  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: "Test product",
      payment_method: id,
      confirm: true
      });


    return res.status(200).json({
      confirm: "abc123"
    });
  } catch(error){
    console.log(error);
    return res.status(400).json({
      message: error.message
    })

  }
}
