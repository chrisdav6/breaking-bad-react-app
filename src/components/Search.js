import React, { useState } from 'react';

const Search = ({ searchCharacters }) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    const inputValue = e.target.value;
    setText(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchCharacters(text);
  };

  return (
    <section className='search'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search Characters'
          autoFocus
          value={text}
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default Search;
