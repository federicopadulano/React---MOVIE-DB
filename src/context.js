import React, { useState, useContext, useEffect } from "react";
// make sure to use https
import useFetch from "./useFetch";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("breaking bad");
  const {
    isLoading,
    data: movies,
    error,
  } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, query, setQuery, movies, error }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
