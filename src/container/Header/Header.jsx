import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Where Every Bite Tells a Tale" />
      <h1 className="app__header-h1">Golden Krust</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Bonnes Saveurs De Votre Choix, Essayez Nos Meilleurs Plats Et Boissons</p>
      <button type="button" className="custom__button">Discover Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;