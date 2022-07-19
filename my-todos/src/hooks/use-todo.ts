import { useContext } from "react";

import { TodoContext, TodoContextData } from "../contexts";

export const useTodo = (): TodoContextData => {
  const context = useContext(TodoContext);

  const errorMessage =
    "Could not use hook 'useTodo', it must be wrapped within a 'TodoProvider'";

  if (!context) {
    throw new Error(errorMessage);
  }

  return context;
};
