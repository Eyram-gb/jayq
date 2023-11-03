import Masonry from "react-masonry-css";
import Layout from "../../components/Layout";
import { useState } from "react";
import { paintings } from "../../lib/images";
import ImageModal from "../../components/ImageModal";
import Head from "next/head";
import ImageModalCarousel from "../../components/ImageModalCarousel";

const Artworks = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (imageName) => {
    setSelectedImage(imageName);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Paintings</title>
        <meta name="description" content="Paintings by Jeremiah Quarshie" />
        <meta
          name="keywords"
          content="jeremiah quarshie, jerry, jayq, art, yellow is the colour of water, gallon, afrogallonisgm, kempinski, ghana, art in ghana, ghanaian artists, ghana artist, realism, painting, paintings, africa, artxlagos, artx, paintings, acrylic on canvas, acrylic on series, yellow is the colour of water series, Ama Asantewa, Couch Potato"
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
      </Head>{" "}
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
        <div className="px-8 md:px-10 py-10">
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full flex-wrap gap-4">
            {paintings.map((item, index) => {
              return (
                <div
                  className="h-[300px] group relative cursor-pointer overflow-hidden"
                  key={item}
                  onClick={() => {
                    openModal(item); 
                    setSelectedIndex(index)
                  }}
                >
                  <img
                    src={`/Paintings/${item}.jpg`}
                    alt="artwork"
                    className=" w-full transition-all lg:hover:scale-105 duration-500 object-cover h-full group-hover:blur-[4px]"
                  />
                  <p className="inset-center w-full px-3 text-center font-extralight text-white transition-all duration-100 group-hover:visible">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* {selectedImage && (
          <ImageModal
            imageUrl={`/Paintings/${selectedImage}.jpg`}
            onClose={closeModal}
          />
        )} */}
        {selectedImage && (
          <ImageModalCarousel
            images={paintings}
            selectedIndex={selectedIndex}
            onClose={closeModal}
          />
        )}
      </Layout>
    </>
  );
};

export default Artworks;
