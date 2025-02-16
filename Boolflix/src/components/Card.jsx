export default function Card({
  posterPath,
  title,
  originalTitle,
  language,
  voteAverage,
}) {
  const baseUrl = "https://image.tmdb.org/t/p/w342";
  const imageUrl = `${baseUrl}${posterPath}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-info">
          <p className="card-original-title">
            Titolo originale: {originalTitle}
          </p>
          <p className="card-language">
            Lingua: {language} <Flag language={language} />
          </p>
          <p className="card-vote">
            Valutazione: {voteAverage}
            <StarRate vote_average={voteAverage} />
          </p>
        </div>
      </div>
    </div>
  );
}
