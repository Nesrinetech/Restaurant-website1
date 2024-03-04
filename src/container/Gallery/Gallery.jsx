import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';


const Gallery = () => {
  const scrollRef = React.useRef(null);
   
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
   
  return (
  <div className="app__gallery flex__center">
     <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Image Showcase</h1>
      <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem'}}>Explorez notre galerie gourmande, un festin visuel capturant l'essence de notre cuisine. Parcourez des moments délicieux et des plats artistiques qui incarnent notre passion pour la gastronomie. Laissez-vous transporter à travers notre univers culinaire, où chaque image raconte une histoire de saveurs exquises et d'expériences mémorables. Bienvenue dans notre galerie où la beauté se déguste avec les yeux</p>
      <button type="button" className="custom__button">Discover More</button>
     </div>

     <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery_image" /> 
            <BsInstagram className="gallery__image-icon" />
          </div>
        ))}
      </div>
     <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
     </div>
  </div>
  </div>
  );
};

export default Gallery;