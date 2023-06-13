import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ImageModal from "../../Components/ImageModal";
import Layout from "../../Components/Layout";

const imageNames = ["2", "3", "IMG_7599","11","gfh"];

const Travel = () => {
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
    <Layout>
      <div className="px-10 py-10 w-full mx-auto">
        <h2 className="text-2xl font-bold underline underline-offset-4 mb-3">
          Time Trade and Travel
        </h2>
        <p className="text-justify text-gray-500">
          Stedelijk Museum Bureau Amsterdam presents the exhibition Time, Trade
          & Travel. This exhibition is the result of a collaboration with the
          Nubuke Foundation in Accra, Ghana, to which the show will travel in
          November. Time, Trade & Travel is a collective venture exploring the
          histories shared by Ghana and the Netherlands, over various centuries,
          diverse economic systems and geopolitical divisions in the world. The
          show explicitly relates to aspects of globalization and
          transnationalism reflected in the field of contemporary art.
          <br />
          Grouping the works under the sweeping exhibition title &lsquo;Time,
          Trade & Travel&rsquo; is a curatorial decision that points to the
          collaboration&apos;s extended focus on the complexities of global
          exchange fostered by capitalism, and its effects on life and art.
          Time, Trade & Travel set the participating artists on a quest for the
          historical encounters between Europeans and Africans, in which trade
          and the concomitant cultural exchange receive particular attention.
          From their manifold and individualperspectives the artists examined
          the ways in which the economic and cultural relations of the past are
          continuing to have an effect in the present. The exhibition functions
          as a platform for the presentation of these artistic inquiries into
          pre-colonial trade, colonial legacies and the tracing the continuing
          imperialistic conditions that characterize contemporary processes of
          globalization. As a starting point the exhibition can in part draw on
          the age-old trading relations between what is present-day Ghana and
          the Netherlands, a relation that was officially affirmed through the
          cities of Amsterdam and Accra in a mutual &lsquo;agreement on
          cooperation&rsquo; in 2004.
          <br />
          In preparation for the exhibition, most of the artists participating
          in Time, Trade & Travel made a visit to their sister cities. The
          exchange gave them the opportunity to get an impression of each
          other&apos;s practices, the working circumstances and respective art
          infrastructures, as well as their cultural, economic, social and
          historical contexts. It also gave all contributors the opportunity to
          learn from the very process of such an exchange and the discussions
          that come with it, as well as from the obstacles that needed to be
          overcome. The exhibition is a way of presenting some thoughts and
          observations resulting from the research, to audiences both in the
          Netherlands and Ghana. Time, Trade & Travel will be seen in the Nubuke
          Foundation in Accra from 25 November, 2012, until 3 February, 2013. 
          <br />
          In Stedelijk Museum Bureau Amsterdam, Time, Trade & Travel is
          accompanied by an extensive SMBA Newsletter (English/Dutch) which is
          available at the exhibition and also published online. Besides a
          curatorial introduction and entries on the works of the participating
          artists, it includes a contribution on the work and teaching of art
          tutor kari-kacha seid&apos;ou of the College of Art in Kumasi, by
          anthropologist Dr. Rhoda Woets, who did extensive research into modern
          art in Ghana.
        </p>
        <br />
        <p className="text-gray-500">
         <span className="text-black">Curators:</span> Jelle Bouwhuis and Kerstin Winking (Stedelijk Museum Bureau
          Amsterdam) Kofi Setordji and Odile Tevie (Nubuke Foundation) Time,
          Trade & Travel has been made possible in part by contributions from
          the Mondrian Fund, the Amsterdam Fund for the Arts, HIVOS and SNS
          REAAL Fund The exhibition is part of Project &lsquo;1975&rsquo; of
          Stedelijk Museum Bureau Amsterdam.
        </p>
        <br /><br />
        <p className="text-gray-500">
          Bernard Akoi-Jackson, Dorothy Akpene Amenuke, Serge Clottey, Zachary
          Formwalt, Iris Kensmil, Aukje Koks, Navid Nuur, Jeremiah Quarshie,
          kari-kacha seidâ€™ou and Katarina Zdjelar.
          <br />
          25 August - 21 October 2012
        </p>
        <hr className="my-8" />
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
                  src={`/Exhibitions/Time Trade and Travel/${item}.jpg`}
                  alt="artwork"
                  className=" w-full transition-all duration-150 group-hover:blur-[4px]"
                />
                <p className="inset-center w-full px-3 text-center font-extralight text-white transition-all duration-100 group-hover:visible">
                  {item}
                </p>
              </div>
            );
          })}
        </Masonry>
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={`/Exhibitions/Time Trade and Travel/${selectedImage}.jpg`}
          onClose={closeModal}
        />
      )}
    </Layout>
  );
};

export default Travel;
