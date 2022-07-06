import { AppProvider } from "./contexts/app-provider";

import { Home } from "./pages";

export const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};
