import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Visit Us</h1>
        <div className="app__wrapper-content">
         <p className="p__opensans">Découvrez le bonheur culinaire dans notre petit coin au cœur de la ville. Suivez l'odeur alléchante vers notre havre de délices. Rejoignez-nous pour une expérience gastronomique inoubliable à la croisée des saveurs et de l'élégance.</p>
         <p className="p__cormorant" style={{ color:  '#ffffff', margin: '2rem 0'}}>Opening Hours</p>
         <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
         <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>
      </div>
      

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus_img" />
      </div>
    </div>
  )

export default FindUs;