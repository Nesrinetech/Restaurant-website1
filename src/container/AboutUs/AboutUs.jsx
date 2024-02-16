import React from 'react'

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
       <div className="app__aboutus-content_about">
         <h1 className="headtext__cormorant">About Us</h1>
         <img src={images.spoon} alt="about_spoon" className="spoon__img" />
         <p className="p__opensans">Chez nous, la passion pour la cuisine rencontre l'hospitalité chaleureuse. Notre histoire commence avec l'amour de la bonne nourriture et le désir de créer des moments mémorables. Chaque plat est une expression de notre dévouement à la qualité et à la créativité. Venez partager notre table, où l'ambiance conviviale et les saveurs délicieuses vous invitent à vivre une expérience culinaire authentique et inoubliable.</p>
         <button type="button" className="custom__button">Know More</button>
       </div>

       <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
       </div>

       <div className="app__aboutus-content_history">
         <h1 className="headtext__cormorant">Our History</h1>
         <img src={images.spoon} alt="about_spoon" className="spoon__img" />
         <p className="p__opensans">Notre histoire commence avec une passion partagée pour la cuisine et le désir de créer un lieu accueillant. Depuis nos modestes débuts, nous avons évolué pour devenir un symbole de convivialité et de délices. Chaque chapitre de notre histoire est écrit avec les saveurs uniques et les moments mémorables partagés avec nos précieux convives. Découvrez notre parcours culinaire, où l'amour pour la bonne cuisine se mêle à une tradition d'hospitalité sincère.</p>
         <button type="button" className="custom__button">Know More</button>
       </div>
    </div>
    </div>
  )

export default AboutUs;