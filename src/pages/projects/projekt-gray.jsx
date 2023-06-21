import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ImageModal from "../../components/ImageModal";
import Layout from "../../components/Layout";

const imageNames = ["IMG_7555", "IMG_7557"];

const ProjektGray = () => {
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
        <h2 className="text-2xl font-bold text-black uppercase pb-2">
          Projekt Gray
        </h2>
        <p className="text-gray-500 text-justify">
          This project stems from my quest to understand the subject of racial
          differences in the close knit unit of a modern family. This artistic
          research project is also influenced by the observations made during my
          visits to Europe. While visiting a number of major European cities, I
          couldn&apos;t help but notice how it seems that Germany as a whole has
          a number of interracial families. This is quite interesting due to the
          fact that interracial marriage became the subject of debate at the
          Reichstag in 1912. Ironically, under the Nazi regime, interracial
          marriage was forbidden. These interesting histories compels me to take
          a research approach on the subject of interracial families in Germany.
          During the few occasions this subject was discussed causally with a
          few friends living in Germany, there was the mention of how the large
          presence of African American soldiers who lived in Germany after the
          Second World War. This had resulted in a number of issues of half
          German and African American parentage. In addition to that, there was
          an influx of students from Ghana and Nigeria who studied and
          eventually had families with Germans, thus contributing to the number
          of mixed race children in Germany from as early as the late 1950s. The
          story of the Boateng brothers who have a Ghanaian father and a German
          mother became an issue of public debate during the 2010 world cup in
          South Africa. Kevin-Prince Boateng decided to play for Ghana whiles
          Jerome Boateng played for Germany. This decision resulted in a match
          clash between the two brothers in a world cup game in South Africa at
          a time when they were not on speaking terms. This example illustrates
          the interesting meanders family relationships, especially mixed race
          once can have even on a national stage. With many western countries
          pushing for the need for more immigration as a result of aging
          population, there is compelling reason to believe that interracial
          families will become even more popular
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
                  src={`/Projects/Projekt Gray/${item}.jpg`}
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
        <div className="mt-12">
          <iframe
          className="w-full"
            height="400"
            src="https://www.youtube.com/embed/wl20OnshWiU"
            title="Gray Projekt"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={`/Projects/Projekt Gray/${selectedImage}.jpg`}
          onClose={closeModal}
        />
      )}
    </Layout>
  );
};

export default ProjektGray