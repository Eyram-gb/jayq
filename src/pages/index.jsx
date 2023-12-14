import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { Quicksand } from "next/font/google";
import Layout from "../components/Layout";
import { Fade } from "react-slideshow-image";
import Head from "next/head";

const fadeImages = [
  "/Home/H1.jpg",
  "/Home/H2.jpg",
  "/Home/H3.jpg",
  "/Home/H4.jpg",
  "/Home/H5.jpg",
  "/Home/H6.jpg",
];

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeremiah Quarshie</title>
        <meta
          name="description"
          content="Jeremiah Quarshie was born in Accra, Ghana. He lives and works in Karlsruhe, Germany. Quarshie obtained a Bachelor of Fine Arts degree from the Kwame Nkrumah University of Science and Technology, KNUST, Kumasi, Ghana in 2007."
        />
        <meta
          name="keywords"
          content="jeremiah quarshie, jerry, jayq, art, yellow is the colour of water, gallon, afrogallonisgm, kempinski, ghana, art in ghana, ghanaian artists, ghana artist, realism, painting, paintings, africa, artxlagos, artx"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Layout>
        <div className={`w-full p-0`}>
          <div className=" px-4 pt-4 md:px-12 w-full">
            <Fade arrows={false} pauseOnHover={false}>
              {fadeImages.map((url, index) => (
                <div key={index} className="relative h-[90vh] w-full">
                  <img
                    src={url}
                    alt="artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </Layout>
    </>
  );
}
