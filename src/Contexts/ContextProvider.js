import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(() => {
    // Initialize with the value from local storage, or use a default color
    return localStorage.getItem('colorMode') || "#03C9D7";
  });
  const [currentMode, setCurrentMode] = useState(() => {
    // Initialize with the value from local storage, or use a default mode
    return localStorage.getItem('themeMode') || "Light";
  });
  const [themeSettings, setThemeSettings] = useState(false);

  useEffect(() => {
    // Save color and mode to local storage whenever they change
    localStorage.setItem('colorMode', currentColor);
    localStorage.setItem('themeMode', currentMode);
  }, [currentColor, currentMode]);

  const setMode = (e) => {
    setCurrentMode(e.target.value); 
    setThemeSettings(false);
  }

  const setColor = (color) => {
    setCurrentColor(color); 
    setThemeSettings(false);
  }

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick , screenSize, setScreenSize, currentColor, 
        currentMode, themeSettings, setThemeSettings, setColor, setMode}}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
