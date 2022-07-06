import { AppProvider } from "./contexts/app-provider";
import { useTheme } from "./hooks/use-theme";

export const App = () => {
  // const {} = useTheme();

  return (
    <AppProvider>
      <h1>App</h1>
    </AppProvider>
  );
};
