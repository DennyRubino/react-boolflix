import { useState } from "react";
import { useAppDataContext } from "../context/AppDataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMovies } = useAppDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "e99307154c6dfb0b4750f6603256716d",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        placeholder="Cerca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
