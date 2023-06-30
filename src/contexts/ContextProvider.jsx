import React, { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";

const stateContext = createContext({
  cards: [],
  setCards: () => {},
  token: null,
  setToken: () => {},
  isOpen: false,
  setIsOpen: () => {},
  sidebar: false,
  setSidebar: () => {},
  isDark: false,
  setIsDark: () => {},
});

const ContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [token, _setToken] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [isDark, setIsDark] = useState(false);
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
    isOpen,
    setIsOpen,
    sidebar,
    setSidebar,
    isDark,
    setIsDark,
  };

  return (
    <stateContext.Provider value={value}>{children}</stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
export default ContextProvider;
