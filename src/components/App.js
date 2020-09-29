import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import CharacterGrid from './CharacterGrid';
import Search from './Search';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    const makeRequest = async () => {
      const request = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${name}`
      );
      setCharacters(request.data);
      setIsloading(false);
    };

    makeRequest();
  }, [name]);

  const searchCharacters = searchName => {
    setName(searchName);
  };

  return (
    <div className='App container'>
      <Header />
      <Search searchCharacters={searchCharacters} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
