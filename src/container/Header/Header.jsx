import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { motion } from 'framer-motion';

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />

      {/* Animate the title "The key to Fine Dining" */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="app__header-h1"
      >
        The key to Fine Dining
      </motion.h1>

      <p className="p__opensans" style={{ margin: '2rem 0' }}>
         
Bonnes saveurs de votre choix, essayez nos meilleurs plats et boissons
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
