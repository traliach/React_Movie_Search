// pure display component — receives movie data as a prop, does not fetch anything
export default function MovieDisplay({ movie }) {

  // guard against null: prevents crash before any movie is fetched
  if (!movie) return <p className="no-movie">No movie to display.</p>;

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <div className="movie-info">
        <h2>{movie.Title} ({movie.Year})</h2>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
}
