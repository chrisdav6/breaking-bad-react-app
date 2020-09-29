import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import CharacterGrid from './CharacterGrid';
import Card from './Card';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      const request = await axios.get(
        'https://www.breakingbadapi.com/api/characters'
      );
      setCharacters(request.data);
      setIsloading(false);
    };

    makeRequest();
  }, []);

  return (
    <div className='App container'>
      <Header />
      <CharacterGrid>
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
      </CharacterGrid>
    </div>
  );
}

export default App;
