import { useContext } from "react";

import { ThemeContext, ThemeContextData } from "../contexts";

export const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  const errorMessage =
    "Could not use hook 'useTheme', it must be wrapped within a 'ThemeProvider'";

  if (!context) {
    throw new Error(errorMessage);
  }

  return context;
};
