import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="header-container">
      <h1 className="logo">Boolflix</h1>
      <span className="search-bar">
        <SearchBar />
      </span>
    </header>
  );
}
