import { useState, useEffect } from 'react'; // useState = store data, useEffect = run on mount
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import './App.css';

function App() {
  const [movie, setMovie] = useState(null);   // holds the fetched movie object
  const [error, setError] = useState(null);   // holds any error message
  const [loading, setLoading] = useState(false); // true while waiting for API response

  // fetches a movie by title from the OMDB API
  async function getMovie(searchTerm) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
      );
      const data = await res.json();

      if (data.Response === 'False') {
        setError(data.Error); // OMDB returns an error message when movie isn't found
        setMovie(null);
      } else {
        setMovie(data);
        setError(null);
      }
    } catch (e) {
      console.error(e);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false); // always runs after try/catch
    }
  }

  // runs once on page load to show a default movie
  useEffect(() => {
    getMovie('Clueless');
  }, []);

  return (
    <div>
      <h1>Movie Search</h1>
      <Form onSearch={getMovie} /> {/* pass getMovie down as a prop — lifting state */}
      {loading && <p className="status">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <MovieDisplay movie={movie} /> {/* pass movie data down as a prop */}
    </div>
  );
}

export default App;
