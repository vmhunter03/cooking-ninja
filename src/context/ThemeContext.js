import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

//The main brain of the color data will work
const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};
// Where color Data will store
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "blue",
  });
//where the color of onClick Data will store 
  const changeColor = (color) => {
      dispatch({type: 'CHANGE_COLOR', payload: color})
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
