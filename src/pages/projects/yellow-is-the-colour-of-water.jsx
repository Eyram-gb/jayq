import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import ImageModal from '../../components/ImageModal'
import Layout from '../../components/Layout'

const imageNames = [
  '_FON4582',
  '6tag_170616-100636',
  'JQ-009',
  'JQQ-024',
  'QUASHIE - MAKOLA WOMAN-005(3)',
]

const Yellow = () => {
  const breakpointColumnsObj = {
    default: 3,
  }

  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (imageName) => {
    setSelectedImage(imageName)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <Layout>
      <div className="px-10 py-10 w-full mx-auto">
        <h2 className="uppercase text-2xl underline underline-offset-4 mb-4">
          Yellow is the Colour of Water
        </h2>
        <p className="text-gray-500 text-justify">
          The project stems from a painting that is part of the Time, Trade &
          Travel exhibition by the Stedelijk Museum Bureau Amsterdam (SMBA) in
          collaboration with the Nubuke Foundation in Accra, Ghana. Jeremiah
          Quarshie created the painting to reflect the quest for identity,
          merging the narrative of the 18th century enslaved Avantuur and the
          Dutch-Surinamese soccer legend Clarence Seedorf. Around 1774,
          four-year old Avantuur was kidnapped in West Africa, enslaved and
          shipped to Suriname, South America. Avantuur is the African-born
          ancestor of the Surinamese Muntslag clan. The narrative of the
          Muntslag family is written across the portrait of the renowned
          football player, Clarence Seedorf. Also born in Suriname (South
          America), Seedorf exemplifies the quest for identity. Whether Dutch,
          Surinamese, and/or African, he is now back on his continent of birth,
          contracted by the Brazilian club Botafogo in the Campeonato Brasileiro
          Série A.
          <br />
          <br />
          Throughout the world, most people are placed (or place themselves)
          into broad and general categories of identity, often based on
          nationality and a visible ethnicity. However, all of us have a far
          more complex history and self-understanding that can and should be
          celebrated. For many Afro-Surinamese, whether living in Suriname, the
          Netherlands, or elsewhere, limited access to their cultural history
          and little knowledge of their ancestry has robbed them of an
          opportunity to assert full control over claims of their identity. With
          a clear understanding of where they come from and how they arrived
          where they are today, individuals are better able to create their own
          identity narratives. Through a celebration of history, family,
          ancestry, and the processes of discovery, we seek to support the
          efforts of Afro-Surinamese (and all) people in the quest to answer the
          question, “who am I?”
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
                <p className="inset-center w-full px-3 text-center font-extralight text-white transition-all duration-100 group-hover:visible">
                  {item}
                </p>
              </div>
            )
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
  )
}

export default Yellow
