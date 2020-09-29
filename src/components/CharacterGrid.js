import React from 'react';
import Card from './Card';

const CharacterGrid = ({ isLoading, characters }) => {
  return (
    <div className='cards'>
      {isLoading
        ? 'Loading...'
        : characters.map(character => (
            <Card
              key={character.char_id}
              name={character.name}
              nickname={character.nickname}
              img={character.img}
            />
          ))}
    </div>
  );
};

export default CharacterGrid;
