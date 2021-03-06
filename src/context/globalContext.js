import React, { useReducer, createContext, useContext } from "react";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const globalReducer = (state, action) => {
  switch (action.type) {
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    case "NAV_OPEN": {
      return {
        ...state,
        navOpen: !state.navOpen,
      };
    }
    default: {
      throw new Error(`Exceptional action type: ${action.type}`);
    }
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: false,
    cursorStyles: ["pointer", "hovered"],
    navOpen: false,
  });

  const onCursor = (cursorType) => {
    cursorType =
      (state.cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  const onNav = () => {
    dispatch({ type: "NAV_OPEN", navOpen: state.navOpen });
  };

  return (
    <GlobalDispatchContext.Provider value={{ dispatch, onCursor, onNav }}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export default GlobalProvider;
// custom hooks to use dispatch and state

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
