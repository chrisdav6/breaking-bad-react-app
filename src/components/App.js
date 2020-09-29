import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import CharacterGrid from './CharacterGrid';

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
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
