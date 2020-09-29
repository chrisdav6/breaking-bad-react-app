import React from 'react';

const Card = ({ character }) => {
  const { name, nickname, img } = character;

  return (
    <div className='card'>
      <h1>{name}</h1>
      <p>{nickname}</p>
      <img src={img} alt={name} />
    </div>
  );
};

export default Card;
