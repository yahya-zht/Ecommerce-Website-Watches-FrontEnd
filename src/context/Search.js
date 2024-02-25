import { createContext, useContext, useState } from "react";

const Search = createContext({});
const SearchProvider = ({ children }) => {
  const [resultsSearch, setResultsSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [ProductSearch, setProductSearch] = useState([]);
  // const [query, setQuery] = useState("");

  return (
    <Search.Provider
      value={{
        resultsSearch,
        setResultsSearch,
        query,
        setQuery,
        ProductSearch,
        setProductSearch,
      }}
    >
      {children}
    </Search.Provider>
  );
};
export default SearchProvider;
export const useSearch = () => {
  return useContext(Search);
};
