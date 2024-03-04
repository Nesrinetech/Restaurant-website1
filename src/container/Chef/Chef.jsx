import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Tantalizing Testimony" />
        <h1 className="headtext__cormorant">Our Core Convictions</h1>

        <div classNae="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">Dans notre cuisine, chaque plat est une histoire d'amour pour les saveurs authentiques. Nous croyons en la fraîcheur des ingrédients, en l'art de la préparation et en la convivialité partagée autour de la table. Notre équipe de chefs dévoués s'engage à vous offrir une expérience culinaire exceptionnelle, où la passion pour la cuisine se marie à l'hospitalité sincère. </p>
          </div>

          <p className="p__opensans">Bienvenue dans notre univers gastronomique, où chaque assiette raconte notre engagement envers l'excellence et le plaisir partagé de bien manger.</p>
        </div>

        <div className="app__chef-sign">
          <p>John tim</p>
          <p className="p__opensans">Chef & Founder</p>
          
        </div>
      </div>
    </div>
  );

export default Chef;