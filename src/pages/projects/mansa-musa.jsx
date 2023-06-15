
import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import ImageModal from '../../components/ImageModal'
import Layout from '../../components/Layout'

const imageNames = ['IMG_8842', 'YI4A1602', 'YI4A1665', 'YI4A2050', 'YI4A2168']

const MansaMusa = () => {
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
      <div className="px-10 py-10 flex justify-center w-full mx-auto">
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
                  src={`/Projects/Mansa Musa Project/${item}.jpg`}
                  alt="artwork"
                  className=" w-full transition-all duration-150 group-hover:blur-[4px]"
                />
                {/* <p className="inset-center w-full px-3 text-center font-extralight text-white transition-all duration-100 group-hover:visible">
                  {item}
                </p> */}
              </div>
            )
          })}
        </Masonry>
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={`/Projects/Mansa Musa Project/${selectedImage}.jpg`}
          onClose={closeModal}
        />
      )}
    </Layout>
  )
}

export default MansaMusa
