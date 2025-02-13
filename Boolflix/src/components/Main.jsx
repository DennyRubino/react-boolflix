import React from "react";
import { useAppDataContext } from "../context/AppDataContext";
import StarRate from "./StarRate";
import Card from "./Card";

export default function Main() {
  const { movies, tvSeries } = useAppDataContext();

  return (
    <main>
      <ul>
        <h2>Film</h2>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Titolo originale: {movie.original_title}</p>
            <p>Lingua: {movie.original_language}</p>
            <p>
              Valutazione: {movie.vote_average}
              <StarRate vote_average={movie.vote_average} />
            </p>
            <Card posterPath={movie.poster_path} />
          </li>
        ))}
      </ul>
      <section>
        <ul>
          <h2>Serie TV</h2>
          {tvSeries.map((serie) => (
            <li key={serie.id}>
              <h3>{serie.name}</h3>
              <p>Titolo originale: {serie.original_name}</p>
              <p>Lingua: {serie.original_language}</p>
              <p>
                Valutazione: {serie.vote_average}
                <StarRate vote_average={serie.vote_average} />
              </p>
              <Card posterPath={serie.poster_path} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
