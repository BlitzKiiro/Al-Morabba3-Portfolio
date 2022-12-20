import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error(
      "Error, ThemeContext must be used inside ThemeContext Provider"
    );
  }

  return context;
};

export default useThemeContext;
