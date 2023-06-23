import React, { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";

const stateContext = createContext({
  cards: [],
  setCards: () => {},
  token: null,
  setToken: () => {},
});

const ContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [token, _setToken] = useState();
  const cookies = new Cookies();

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      cookies.set("token", token, { path: "/" });
    } else {
      cookies.remove("token");
    }
  };

  const value = {
    cards,
    setCards,
    token,
    setToken,
  };

  return (
    <stateContext.Provider value={value}>{children}</stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
export default ContextProvider;
