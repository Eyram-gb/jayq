import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ImageModal from "../../Components/ImageModal";
import Layout from "../../Components/Layout";

const imageNames = [
  "_FON4582",
  "6tag_170616-100636",
  "JQ-009",
  "JQQ-024",
  "QUASHIE - MAKOLA WOMAN-005(3)",
];

const Yellow = () => {
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
        <h2 className="uppercase text-2xl underline underline-offset-4 mb-4">
          Yellow is the Colour of Water
        </h2>
        <p className="text-gray-500 text-justify">
          Yellow is the Colour of Water is a multi-site exhibition project
          staged by the artist Jeremiah Quarshie in collaboration with curator
          Robin Riskin. Based out of Gallery 1957 at the Kempinski Hotel Gold
          Coast City, Accra, the exhibition maps out to a network of
          site-specific interventions, taking place at the Tema Station lorry
          park and Kotoka International Airport. The body of work revolves
          around questions of water and its flows through the city of Accra, as
          embodied through the ubiquitous yellow “Kufuor” gallons used to store
          and carry it. Harmonies and contradictions surrounding the vital
          resource of water are produced through poetics of potential.
          <br />
           A series
          of paintings presents the gallons as thrones, and the common
          characters who sit upon them as queens. The “Kufuor gallons” act as
          object and backdrop alike, framing the scene and multi-functioning as
          chairs, props, stage-set, and sometimes subject. Quarshie playfully
          inverts portraiture from a hegemonic apparatus of the elite, to a tool
          for raising critical questions about conditions of the masses. Though
          the artist paints in a classical style, a tongue-in-cheek lightness
          conjures a mood of humour, whose sweet veneer is followed by a sharp
          kick.
          <br />
           Coursing out to the town, fabricated pipes intervene in currents
          of the city. They map out territory that has fluctuated between elite
          colonial oases, zones of Nkrumahist independence, and speculative
          corporate development projects. Like the women who pose as characters
          in the paintings, whose lived realities span many roles, places change
          from one thing into another, and sometimes back into themselves, but
          are reformed and made anew.
          <br />
           Curatorially, the exhibition aims to take
          painting as a political project, and the exhibition structure as
          grounds for inquiry and interrogation. The show presents multiple
          formats of painting, through not only pigments but material objects
          (stretched canvas, mounted billboard, sculptural pipes). Interventions
          take place over a series of sites—hotel gallery, public bus station,
          international airport. The process involves individuals and groups
          across various classes and sectors of labour. Audiences and players
          are implicated as hosts, collaborators, and participants. The Gallery
          that presents the project enters the picture as one of a constellation
          of points, whose territory, history and politics are equally called
          into question.
          <br />
           For the opening, the exhibition is temporarily
          displaced from the Gallery space of 1957 to a “Galleria” construction
          site across the way, where the skeleton of Kempinski&apos;s imminent
          upscale shopping mall nears completion. Paintings and pipes inhabit
          exposed concrete; hang from bare-beamed ducts and channels. A space on
          the precipice of rebirth, its halls will soon be written over by the
          circulation of other goods and conglomerates. Is the artist&apos;s work
          complicit in these systems, or does a subtle critique lie within its
          participation? Quarshie&apos;s evanescent occupation is cast as kind of
          shadow, or an echo, whose presence will reverberate from seams of
          cement, and in recollections of minds and materials that may recall
          its traces. Robin Riskin Independent Curato
        </p>
        <div className="mt-6 text-gray-500">
          <p className="font-bold text-black">The Approach</p>
          <p className="text-gray-700">A workStream of 5 projects:</p>
          <ul className="list-disc">
            <li>Muntslag family research</li>
            <li>Diaspora Art Project</li>
            <li>My Family Tree research project</li>
            <li>Keti Koti Symposium</li>
            <li>Outreach and promotion</li>
          </ul>
        </div>
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
                  src={`/Projects/Yellow is the Colour of Water/${item}.jpg`}
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
          imageUrl={`/Projects/Yellow is the Colour of Water/${selectedImage}.jpg`}
          onClose={closeModal}
        />
      )}
    </Layout>
  );
};

export default Yellow;
