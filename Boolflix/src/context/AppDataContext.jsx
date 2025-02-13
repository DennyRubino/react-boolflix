import { createContext, useContext, useState } from "react";

const AppDataContext = createContext();

function AppDataProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTVSeries] = useState([]);

  return (
    <AppDataContext.Provider
      value={{ movies, setMovies, tvSeries, setTVSeries }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

function useAppDataContext() {
  return useContext(AppDataContext);
}

export { AppDataProvider, useAppDataContext };
