import { useState } from 'react';

// onSearch is the getMovie function passed down from App (lifting state)
export default function Form({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(''); // tracks what user types

  function handleSubmit(e) {
    e.preventDefault(); // prevents page refresh on form submit
    if (searchTerm.trim()) onSearch(searchTerm);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}                              // controlled input
        onChange={(e) => setSearchTerm(e.target.value)} // update state on each keystroke
      />
      <button type="submit">Search</button>
    </form>
  );
}
