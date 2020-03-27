import Head from "next/head";
import Header from "./Header";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>KellyPaigeArt{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Spartan&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  );
};

export default Layout;
