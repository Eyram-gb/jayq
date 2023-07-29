import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Layout from "../../components/Layout";
import ImageModal from "../../components/ImageModal";
import Head from "next/head";

const imageNames = ["DSC_7184", "DSCF2429(2)", "Jeremiah Quarshie(2)"];

const Muses = () => {
  const breakpointColumnsObj = {
    default: 3,
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
        <title>Muses</title>
        <meta
          name="description"
          content="In the history of art, artists have created works of excellence that have been strongly influenced by the presence of other people in their lives. These sources of inspiration have mostly been women - i.e. In the case of male artists. There may have been other sources of positive influence to the creative works of artists in the past."
        />
        <meta
          name="keywords"
          content="jeremiah quarshie, jerry, jayq, art, yellow is the colour of water, gallon, afrogallonisgm, kempinski, ghana, art in ghana, ghanaian artists, ghana artist, realism, painting, paintings, africa, artxlagos, artx, muses, exhibitions, BRIGHT TETTEH ACKWEH, JEREMIAH QUARSHIE, ELKANAH MPESUM, CONSTANCE SWANIKER, SERGE CLOTTEY, NII ODZENMA, KEVIN HAIZEL, BERNARD AKOI-JACKSON "
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
          <div className="w-full mx-auto text-gray-500 pb-10 text-justify">
            <h2>
              <h2 className="text-2xl font-bold text-black uppercase pb-2">
                Muses -{" "}
                <span className="italic lowercase font-normal">
                  the exhibition
                </span>
              </h2>
            </h2>
            <p>
              In the history of art, artists have created works of excellence
              that have been strongly influenced by the presence of other people
              in their lives. These sources of inspiration have mostly been
              women - i.e. In the case of male artists. There may have been
              other sources of positive influence to the creative works of
              artists in the past.
              <br />
              The idea of the existence of muses may be highly disputed or
              believed. However one cannot deny the positive influence of people
              in our personal lives. As art takes a more contemporary sense, one
              cannot deny the fact that ideas have evolved and beliefs modified.
              The human factor has however not changed.
              <br />
              In a more contemporary situation questions about whether artists
              still hold on strongly to the idea of a muse or whether it is seen
              as indigenous belief are left unanswered. There is also the issue
              of whether the idea of muses is totally a Western concept. Also to
              be given strong consideration will be the fact that many women are
              now very active in the field of art. It raises questions like,
              &apos;Do women artists have or believe in the idea of a muse?, Are
              their muses male or female?, etc.
            </p>
            <div className="mt-6">
              <p>
                The Muses exhibition is created in order to emphasize the
                importance of muses in the lives of artists and open up
                discussions on the idea of muses in our own very lives even as
                non-artists.
              </p>
              <ul className="list-disc mt-2">
                <li>Who is a muse in the eye of a Ghanaian artist?</li>
                <li>
                  How is the subject of a muse portrayed the in the contemporary
                  Ghanaian sense?
                </li>
                <li>Do we all have muses?</li>
                <li>
                  How are female artists going to present their work under such
                  a theme?
                </li>
                <li>
                  How will artists who do not feel the presence of muses present
                  their work?
                </li>
              </ul>
            </div>
            <p className="mt-8">
              The Muses exhibition will portray in different media of expression
              works of a variety of Ghanaian artists. With contemporary art
              taking different forms and directions, the exhibition intends not
              to limit the whole idea of artists&apos; muses to a singular most
              specific definition of a muse but to show perhaps a collective
              body of interactions with people or experiences that has
              influenced their creativity in a large way.
              <br />
              The exhibition will feature works of art in the fields of
              photography, painting, illustration, installation, sculpture and
              performance.
            </p>
            <p className="my-8">
              <span className="text-black font-bold">Curators:</span> Jeremiah
              Quarshie
            </p>
            <p className="text-xl font-semibold text-black">
              Participating Artists
            </p>
            <p className="text-gray-500 uppercase">
              Bright Tetteh Ackweh, Jeremiah Quarshie, Elkanah Mpesum, Constance
              Swaniker, Serge Clottey, Nii Odzenma, Kevin Haizel, Bernard
              Akoi-Jackson
            </p>
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {imageNames.map((item) => {
              return (
                <div
                  className="w-full group relative cursor-pointer"
                  key={item}
                  onClick={() => openModal(item)}
                >
                  <img
                    src={`/Exhibitions/Muses/${item}.jpg`}
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
        </div>
        {selectedImage && (
          <ImageModal
            imageUrl={`/Exhibitions/Muses/${selectedImage}.jpg`}
            onClose={closeModal}
          />
        )}
      </Layout>
    </>
  );
};

export default Muses;
