import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from "./HeaderContent";
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
  return(
    <div id = "He">
      <ImageThumbnail/>
      <div>
      <HeaderTitle/>
      <HeaderContent/>
      </div>
    </div>
  )
};

export default HeaderContainer;