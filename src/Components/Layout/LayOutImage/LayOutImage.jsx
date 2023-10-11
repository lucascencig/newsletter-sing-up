import React from 'react';
import svgIllustrationSingUpDesktop from '../../../assets/images/illustration-sign-up-desktop.svg';

import '../../../index.css';

const LayOutImage = () => {

  return (
    <div className='w-auto '>
      <img
        className='w-auto  '
        src={svgIllustrationSingUpDesktop}
        alt=""
      />
    </div>
  );
}

export default LayOutImage;