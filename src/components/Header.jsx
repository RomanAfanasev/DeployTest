import React from 'react';
import background from '../images/flytech6.svg';

export const Header = () => {
    
    return(
        <div className="header">
        <a href="#default" className="logo" style={{ backgroundImage: `url(${background})` }}></a>
        <div className="header-right">
          <a className="active" href="#home">Home</a>          
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
};