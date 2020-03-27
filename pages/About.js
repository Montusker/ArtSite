import Layout from "../components/Layout";

//TODO: Get content from Kelly
export default function About() {
  return (
    <Layout>
    <div>
      <h2>About Kelly Paige</h2>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et egestas urna, nec iaculis eros. Aenean lacinia diam ac odio mattis bibendum. Suspendisse potenti. Donec eros purus, lacinia tincidunt urna in, ullamcorper auctor diam. Nunc vitae ligula a erat fermentum sodales. Duis vel ex non risus bibendum sodales id ut dolor. Proin ac nibh venenatis, consequat augue ut, elementum erat. Maecenas id mattis orci. Etiam iaculis ultrices urna, sed tincidunt arcu sollicitudin quis. Integer gravida ante vitae scelerisque euismod. Cras eget condimentum dolor. Nulla elit lectus, tristique id auctor at, placerat quis est. Sed nec convallis lorem, id congue purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique, erat a tempor aliquam, nulla sapien tincidunt mauris, ullamcorper auctor nisi turpis pharetra nulla. Quisque maximus purus et odio tincidunt, a facilisis eros vehicula.</p>
    </div>
    <div>
      <h2>Contact Me!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie orci et condimentum feugiat. Nullam posuere dapibus neque, vitae finibus velit condimentum in. Mauris facilisis ante in augue accumsan pellentesque. In hac habitasse platea dictumst. Donec rhoncus tempus ante et tristique. Vivamus sodales metus sollicitudin pellentesque aliquam.</p>

      <ul>
        <li>Phone Number: 555-5555-555</li>
        <li>Email: 1@2.com</li>
      </ul>

      </div>
          <style jsx>{`
            div {
              margin-left: 50px;
              margin-right: 20%;
            }

            @font-face {
                font-family: 'BebasNeue-Regular';
                src: url('../public/fonts/BebasNeue-Regular.otf');
            }
              h2, h3, h4 {
                font-family: "BebasNeue-Regular";
                font-weight: bold;
              }
              p {
                font-family: "Spartan", sans-serif;
              }
            `}</style>
    </Layout>

  );
}
