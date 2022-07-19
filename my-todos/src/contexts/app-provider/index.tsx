import { FC, PropsWithChildren } from "react";

import { ThemeProvider } from "../theme";
import { GlobalStyle } from "../../styles";
import { TodoProvider } from "../todo";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    <TodoProvider>
      {children}
      <GlobalStyle />
    </TodoProvider>
  </ThemeProvider>
);
