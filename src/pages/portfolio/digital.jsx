import React, { useState } from 'react'
import Masonry from 'react-masonry-css';
import ImageModal from "../../components/ImageModal";
import Layout from '../../components/Layout';

const imageNames = [
  "candy - Digital Art",
  "Cape Coast Castle - Phone Photograpy",
  "Elmina Castle - Phone Photography",
  "European Sky - Phone Photography",
  "helmet - Digital Art",
  "hoodie1 - Digital Art",
  "Olympiapark - Phone Photography",
  "red man - Digital Art",
  "redhero1 - Digital Art",
];

const Digital = () => {
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1
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
      <div className='px-10 py-10'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imageNames.map((item) => {
            return (
              <div className='w-full group relative cursor-pointer' key={item} onClick={() => openModal(item)}>
                <img src={`/Digital/${item}.jpg`} alt="artwork" className=' w-full transition-all duration-150 group-hover:blur-[4px]' />
                <p className='inset-center w-full px-3 text-center font-extralight text-white transition-all duration-100 group-hover:visible'>
                  {item}
                </p>
              </div>
            )
          })}
        </Masonry>
      </div>
      {selectedImage && (
        <ImageModal imageUrl={`/Digital/${selectedImage}.jpg`} onClose={closeModal} />
      )}
    </Layout>
  )
}
export default Digital