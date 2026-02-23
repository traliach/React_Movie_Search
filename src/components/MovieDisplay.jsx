export default function MovieDisplay({ movie }) {
    if (!movie) return <p>No movie to display.</p>;
  
    return (
      <div>
        <h2>{movie.Title} ({movie.Year})</h2>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
      </div>
    );
  }