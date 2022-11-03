import React from 'react';
import zuri_icon from '../assets/img/Vector.svg';
import hng_icon from '../assets/img/Footer text.svg';
import i4g_icon from '../assets/img/I4G.svg';

const footer = () => {
  return (
    <footer>
       <div className="footer__content">
        <img src={zuri_icon} alt="zuri__icon" />
        <img src={hng_icon} alt="hng__icon" />
        <img src={i4g_icon} alt="I4G__icon" />
       </div>
    </footer>
  );
}

export default footer