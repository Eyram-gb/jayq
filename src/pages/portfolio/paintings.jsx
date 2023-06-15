import Masonry from 'react-masonry-css'
import Layout from '../../anyname/Layout'
import { useState } from 'react';
import ImageModal from '../../anyname/ImageModal'


const imageNames = [
  "Ama Asantewa _ Acrylic on canvas _ 120cm by 150cm _ 2022",
  "Amoke  _ Acrylic on canvas _ 114cm by 114cm _ 2018",
  "Antie Dedei_ Yellow is the Colour of Water series _ Acrylic on canvas _ 152cm by 121cm _ 2016",
  "Christiana_ Yellow is the Colour of Water series _ Acrylic on canvas _ 152cm by 121cm _ 2016",
  "Couch Potato1 _ Acrylic on canvas _ 180cm by 100cm _ 2022",
  "Eyram_ Yellow is the Colour of Water series _ Acrylic on canvas _ 152cm by 121cm _ 2015",
  "Franklina_ Yellow is the Colour of Water series _ Acrylic on canvas _ 152cm by 121cm _ 2016",
  "Imam _ Acrylic on canvas _ 120cm by 150cm _ 2022",
  "Manye_. Yellow is the Colour of Water, 2016, Acrylic on canvas, 152cm x 121cm, courtesy the artist and Gallery 1957, Accra",
  "Village Tech, 2011 Acrylic on linen, 122cm by 152cm, courtesy the artist.",
  "Jessica _ Acrylic on canvas _ 81cm by 102cm _ 2010",
  "Kelechi Ama-Obi _ Acrylic on canvas _ 120cm by 150cm _ 2022",
  "Manye and Akuyo_ Yellow is the Colour of Water series _ Acrylic on canvas _ 152cm by 121cm _ 2016",
  "Manyer (Queen Mother) _ Acrylic on canvas _ 91cm by 182cm _ 2018",
  "Market Woman_s Daughter _ Acrylic on canvas _ 102cm by 127cm _ 2013",
  "Obiribea_ Yellow is the Colour of Water series _ Acrylic on canvas _ 152cm by 121cm _ 2016",
  "Queen no.2 _ Acrylic on canvas _ 91cm by 182cm _ 2018",
  "IMG_2127",
  "Shooter_ Yellow is the Colour of Water series _ Acrylic on canvas _ 152cm by 121cm _ 2015",
  "Stephanie_ Yellow is the Colour of Water series _ Acrylic on canvas _ 152cm by 121cm _ 2016",
  "Valuables _ Acrylic on canvas _ 170cm by 100cm _ 2022",
];


const Paintings = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
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
                <img src={`/Paintings/${item}.jpg`} alt="artwork" className=' w-full transition-all duration-150 group-hover:blur-[4px]' />
                <p className='inset-center w-full px-3 text-center font-extralight text-white transition-all duration-100 group-hover:visible'>
                  {item}
                </p>
              </div>
            )
          })}
        </Masonry>
      </div>
      {selectedImage && (
        <ImageModal imageUrl={`/Paintings/${selectedImage}.jpg`} onClose={closeModal} />
      )}
    </Layout>
  )
}

export default Paintings