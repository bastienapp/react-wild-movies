import "./App.css";
import MovieCard from "./components/MovieCard";
import Title from "./components/Title";

function App() {
  const pokemonMovie = {
    title: "Pokémon The First Movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTkyNDQxOTg5MF5BMl5BanBnXkFtZTYwODA2MDE3._V1_FMjpg_UX1000_.jpg",
    release: "1998",
  };

  const interstellarMovie = {
    title: "Interstellar",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    release: "2014",
  };

  return (
    <div className='App'>
      <Title name='Wild Movies' />

      <ul>
        <MovieCard {...interstellarMovie} />
        <MovieCard {...pokemonMovie} />
      </ul>
    </div>
  );
}

export default App;
