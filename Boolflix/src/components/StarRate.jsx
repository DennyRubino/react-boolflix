import React from "react";

export default function StarRate({ vote_average }) {
  const fullStars = Math.max(1, Math.round(vote_average / 2));

  if (fullStars === 0) {
    return <span>☆☆☆☆☆</span>;
  } else if (fullStars === 1) {
    return <span>★☆☆☆☆</span>;
  } else if (fullStars === 2) {
    return <span>★★☆☆☆</span>;
  } else if (fullStars === 3) {
    return <span>★★★☆☆</span>;
  } else if (fullStars === 4) {
    return <span>★★★★☆</span>;
  } else if (fullStars === 5) {
    return <span>★★★★★</span>;
  }
}
