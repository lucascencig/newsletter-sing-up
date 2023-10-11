import React from 'react';
import svgIllustrationSingUpDesktop from '../../../assets/images/illustration-sign-up-desktop.svg';

import '../../../index.css';

const LayOutImage = () => {

  return (
    <div className='w-96 flex justify-center items-center '>
      <img
        className='w-10/12 flex justify-center items-center  '
        src={svgIllustrationSingUpDesktop}
        alt=""
      />
    </div>
  );
}

export default LayOutImage;