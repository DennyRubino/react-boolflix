import { useAppDataContext } from "../context/AppDataContext";

export default function Main() {
  const { movies } = useAppDataContext();

  return (
    <main>
      <h2>Lista Film e Serie</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Titolo originale: {movie.original_title}</p>
            <p>Lingua: {movie.original_language}</p>
            <p>Valutazione: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
