import React from 'react';

const Card = ({ character }) => {
  const { name, nickname, img, portrayed, birthday, status } = character;

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={img} alt={name} />
        </div>
        <div className='card-back'>
          <h1>{name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {birthday}
            </li>
            <li>
              <strong>Status:</strong> {status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
