import React from "react";
import { useAppDataContext } from "../context/AppDataContext";
import Card from "./Card";

export default function Main() {
  const { movies, tvSeries } = useAppDataContext();

  return (
    <main>
      <section className="container-Film">
        <ul>
          <h2>Film</h2>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Card
                posterPath={movie.poster_path}
                title={movie.title}
                originalTitle={movie.original_title}
                language={movie.original_language}
                voteAverage={movie.vote_average}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="container-Tvseries">
        <ul>
          <h2>Serie TV</h2>
          {tvSeries.map((serie) => (
            <li key={serie.id}>
              <Card
                posterPath={serie.poster_path}
                title={serie.name}
                originalTitle={serie.original_name}
                language={serie.original_language}
                voteAverage={serie.vote_average}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
