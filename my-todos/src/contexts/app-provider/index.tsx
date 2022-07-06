import { FC, PropsWithChildren } from "react";

import { ThemeProvider } from "../theme";
import { GlobalStyle } from "../../styles";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);
