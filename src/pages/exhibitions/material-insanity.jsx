
import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import ImageModal from '../../components/ImageModal'
import Layout from '../../components/Layout'

const imageNames = [
  'Macaal MATERIAL INSANITY- © Saad Alami 16',
  'Macaal MATERIAL INSANITY- © Saad Alami 20',
  'Material Insanity, MACAAL, © Zakaria Boumliha-18',
]

const MaterialInsanity = () => {
  const breakpointColumnsObj = {
    default: 2,
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
      <div className="px-10 py-10 w-full mx-auto text-gray-500">
        <div>
          <h2 className="text-2xl font-bold text-black uppercase">
            Material Insanity
          </h2>
          <div className="my-4">
            <p>
              <span className="text-black font-semibold">Curator:</span> Meriem
              Berrada & Janine Dieudji, MACAAL
            </p>
            <p>

              <span className="text-black font-semibold">Scenography:</span>{' '}
              Zineb Andress Arraki
            </p>
          </div>
          <p className="mb-8">
            Bringing together more than 30 artists from the continent and its
            diaspora, Material Insanity explores matter and its symbolic
            significance, in a plurality of dimensions and formal experiences.
            Through installations made from everyday objects or materials, the
            exhibition intersects various discourses in the service of a new
            aesthetic.
            <br />
            Through an immersive scenography created by architect and artist
            Zineb Andress Arraki, the works in the Material Insanity exhibition
            question the relationship between form and meaning, while
            sublimating the potential of the medium itself.
          </p>
          <div>
            <p className="text-xl font-semibold text-black">
              Exhibited Artists
            </p>
            <p>
              IGSHAAN ADAMS - AMINA AGUEZNAY - MUSTAPHA AKRIM - YASMINA ALAOUI -
              ZAINAB ANDALIBE - CLAY APENOUVON - YOUNES BABA-ALI - TAKUNDA REGIS
              BILLIAT - OLI BONZANIGO - M&apos;BAREK BOUHCHICHI - HASSAN BOURKIA
              - MALEK GNAOUI - FRANCES GOODMAN - HASSAN HAJJAJ - MOHSSIN HARRAKI
              - NICHOLAS HLOBO - CYRUS KABIRU - ALEXANDRA KARAKASHIAN - BRONWYN
              KATZ - KOKOKO! - ESMERALDA KOSMATOPOULOS - ADIL KOURKOUNI -
              MEHDI-GEORGES LAHLOU - MOSHEKWA LANGA - TURIYA MAGADLELA - IBRAHIM
              MAHAMA - OLUMIDE ONADIPE - OWANTO - ADRIAN PIPER - JEREMIAH
              QUARSHIE - MOFFAT TAKADIWA - ARLENE WANDERA - NARI WARD - FATIHA
              ZEMMOURI
            </p>
          </div>
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
                  src={`/Exhibitions/Material Insanity/${item}.jpg`}
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
          imageUrl={`/Exhibitions/Material Insanity/${selectedImage}.jpg`}
          onClose={closeModal}
        />
      )}
    </Layout>
  )
}

export default MaterialInsanity
