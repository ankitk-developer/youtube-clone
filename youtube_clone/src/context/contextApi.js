import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setsearchResults] = useState();
  const [categories, setCategories] = useState("NEW");
  const [mobilemenu, setMobileMenu] = useState();

  useEffect(() => {
    renderApiDataForCategories(categories);
  }, [categories]);

  const renderApiDataForCategories = ({ contents }) => {
    // setLoading(true);
    // fetchDataFromApi(`search/?q=${query}`).then((res) => {
    //   console.log("categories response", res);
    //   setLoading(false);
    // });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setsearchResults,
        categories,
        setCategories,
        mobilemenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
