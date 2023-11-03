import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ImageModal from "../../components/ImageModal";
import Layout from "../../components/Layout";
import { mansaMusah } from "../../lib/images";
import Head from "next/head";

const MansaMusa = () => {
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    600: 1,
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
        <title>Mansa Musa Project</title>
        <meta
          name="description"
          content="MANSA MUSA - the making of a royal portrait. The African continent has wallowed in the encapsulation of its his history into its relationship with slavery and colonialism. Meanwhile history has consistently demonstrated the raw strength, majestic grace and immense wealth of Africans who once lived. These works of art will serve as a reminder to the African of the great achievements of Mansa Musa that still stand even till date: from the mosques and universities he built to the maintenance of his title as the Richest Man to have ever lived. It will also enlighten non-Africans on what Africa was before and whet their appetites to see what it is today."
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
        <div className="px-10 py-10 w-full mx-auto">
          <div className="w-full mx-auto text-gray-500 pb-10">
            <h2 className="text-2xl font-bold text-black uppercase pb-2">
              Mansa Musa -{" "}
              <span className="italic lowercase font-normal">
                the making of a royal portrait
              </span>
            </h2>
            <p>
              The African continent has wallowed in the encapsulation of its his
              history into its relationship with slavery and colonialism. It is
              branded as the poorest continent in the world. There is a constant
              churning out of stories, movies and books designed to contribute
              to a loathsome self-worth due to one&apos;s relation to Africa.
              Meanwhile history has consistently demonstrated the raw strength,
              majestic grace and immense wealth of Africans who once lived.
              There are very limited if any substantial artworks dedicated to
              the memory of great historical giants in order to create the
              realization that we go beyond pitiful stories and thus needing
              constant emancipation. The aim of this documentary is to film the
              process of creating a work of art and paintings about the
              true-life story of one African giant, Mansa Musa, the most
              affluent man in history so that others can view and value some
              important works of art. These works of art will serve as a
              reminder to the African of the great achievements of Mansa Musa
              that still stand even till date: from the mosques and universities
              he built to the maintenance of his title as the Richest Man to
              have ever lived. It will also enlighten non-Africans on what
              Africa was before and whet their appetites to see what it is
              today. It will be a step up from being viewed as derogatory and
              subpar to being acknowledged as a people who have come a long way.
              <br />
              Born in 1280 AD, Mansa Musa ruled over a large area in West Africa
              called the Mali Empire which covered parts of modern-day
              Mauritania, Senegal, Gambia, Guinea Bissau, Niger and Ivory Coast.
              He ascended the throne from the position of deputy after his
              predecessor embarked on a voyage on the Atlantic Ocean and never
              returned. The amount of gold in Mali at the time is claimed to
              have made him exceedingly wealthy. He donated to others, built
              mosques and universities. Mansa Musa had a firm commitment to
              Islam. As a result, in 1324 CE, he made a pilgrimage to Mecca. His
              retinue reportedly numbered in the tens of thousands, some persons
              were assigned to guard him during his voyage, according to
              scholars. Along with him were camels and elephants that were
              traveling with tons of gold, gold dust and adequate sustenance for
              their voyage. His generous donations in Cairo crashed the gold
              economy for a decade. It was the only tie in history where the
              gold market was completely in the hands of one man. Due to his
              wealth, the rest of the world became aware of Mali&apos;s
              existence.
              <br />
              After Mansa Musa passed away in 1337, his sons took over the
              empire. At the time of his death, the empire was prosperous thanks
              to his astute leadership, but it gradually crumbled. Mansa Musa
              continued to be viewed as a representation of extravagant luxury
              long after he had away. However, his wealth is only one aspect of
              his legacy; he is also renowned for his support for Mali&apos;s
              arts and culture as well as for his commitment to Islam.
            </p>
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {mansaMusah.map((item) => {
              return (
                <div
                  className="w-full group relative cursor-pointer"
                  key={item}
                  onClick={() => openModal(item)}
                >
                  <img
                    src={`/Projects/Mansa Musa Project/${item}.jpg`}
                    alt="artwork"
                    className=" w-full transition-all duration-150 group-hover:blur-[4px]"
                  />
                  {/* <p className="inset-center w-full px-3 text-center font-extralight text-white transition-all duration-100 group-hover:visible">
                  {item}
                </p> */}
                </div>
              );
            })}
          </Masonry>
          <div className="mt-12 w-full">
            <iframe
              className="w-full"
              height="400"
              src="https://www.youtube.com/embed/Xd7ohUB4Zzg"
              title="Mansa Musa Project"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {selectedImage && (
          <ImageModal
            imageUrl={`/Projects/Mansa Musa Project/${selectedImage}.jpg`}
            onClose={closeModal}
          />
        )}
      </Layout>
    </>
  );
};

export default MansaMusa;
