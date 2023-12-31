import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ImageModal from "../../components/ImageModal";
import Layout from "../../components/Layout";
import { digital } from "../../lib/images";
import Head from "next/head";

const Digital = () => {
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageName) => {
    setSelectedImage(imageName);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Digital Arts</title>
        <meta
          name="description"
          content="Digital Arts By Jeremiah Quarshie."
        />
        <meta
          name="keywords"
          content="jeremiah quarshie, jerry, jayq, art, yellow is the colour of water, gallon, afrogallonisgm, kempinski, ghana, art in ghana, ghanaian artists, ghana artist, realism, painting, paintings, africa, artxlagos, artx Digital Arts, AI arts, midjourney"
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
            {digital.map((item) => {
              return (
                <div
                  className="h-[300px] group relative cursor-pointer overflow-hidden"
                  key={item}
                  onClick={() => openModal(item)}
                >
                  <img
                    src={`/Digital/${item}.jpg`}
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
        {selectedImage && (
          <ImageModal
            imageUrl={`/Digital/${selectedImage}.jpg`}
            onClose={closeModal}
          />
        )}
      </Layout>
    </>
  );
};
export default Digital;
