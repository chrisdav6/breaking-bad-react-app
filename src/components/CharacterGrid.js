import React from 'react';
import Card from './Card';
import Spinner from '../img/spinner.gif';

const CharacterGrid = ({ isLoading, characters }) => {
  return isLoading ? (
    <img className='spinner' src={Spinner} alt='Spinner' />
  ) : (
    <section className='cards'>
      {characters.map(character => (
        <Card key={character.char_id} character={character} />
      ))}
    </section>
  );
};

export default CharacterGrid;
