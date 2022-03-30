import React from "react";

function MovieCard(props) {
  const { release, title, poster, addToFavourite } = props;

  return (
    <li>
      <h2>{title}</h2>
      <img src={poster} alt={title} />
      <p>{release}</p>
      <button onClick={addToFavourite}>Add to favourite</button>
    </li>
  );
}

export default MovieCard;
