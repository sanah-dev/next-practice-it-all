'use client';

import { IconFav } from './Icon';

const FavoriteButton = () => {
  const onClick = () => {
    console.log('FavoriteButton');
  };

  return (
    <i className='favBtn' onClick={onClick}>
      <IconFav />
    </i>
  );
};

export default FavoriteButton;
