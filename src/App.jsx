import { useState, useEffect } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  async function getMovie(searchTerm) {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
      );
      const data = await res.json();
      if (data.Response === 'False') {
        setError(data.Error);
        setMovie(null);
      } else {
        setMovie(data);
        setError(null);
      }
    } catch (e) {
      console.error(e);
      setError('Network error. Please try again.');
    }
  }

  useEffect(() => {
    getMovie('Clueless');
  }, []);

  return (
    <div>
      <h1>Movie Search</h1>
      <Form onSearch={getMovie} />
      {error && <p>{error}</p>}
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;