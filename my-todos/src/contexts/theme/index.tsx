import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { THEME_STORAGE_KEY } from "../../constants";
import { GetTheme } from "../../services";

import { ThemeType } from "../../services/theme/contract/get-theme";

export type ThemeContextData = {
  toggleTheme: (type?: ThemeType) => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const getThemeFromSessionStorage = (): ThemeType => {
    return (
      (localStorage.getItem(THEME_STORAGE_KEY) as ThemeType | null) || "dark"
    );
  };

  const [theme, setTheme] = useState<ThemeType>("dark");

  const toggleTheme = useCallback((type?: ThemeType) => {
    if (type) {
      return setTheme(type);
    }

    setTheme((state) => (state === "dark" ? "light" : "dark"));
  }, []);

  const contextData = useMemo(() => ({ toggleTheme }), [toggleTheme]);

  useLayoutEffect(() => {
    const themeChoice = getThemeFromSessionStorage();

    setTheme(themeChoice);
  }, []);

  return (
    <ThemeContext.Provider value={contextData}>
      <StyledThemeProvider theme={GetTheme.getInstace().getTheme(theme)}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
