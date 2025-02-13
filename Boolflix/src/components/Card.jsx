import React from "react";

export default function Card({
  posterPath,
  title,
  originalTitle,
  voteAverage,
}) {
  const baseUrl = "https://image.tmdb.org/t/p/w154";

  const imageUrl = `${baseUrl}${posterPath}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content"></div>
    </div>
  );
}
