import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

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
      {isLoading
        ? 'Loading...'
        : characters.map(character => <p>{character.name}</p>)}
    </div>
  );
}

export default App;
