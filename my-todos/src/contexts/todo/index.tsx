import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { TodoDTO, CreateTodoDTO } from "../../dtos";
import { TODO_STORAGE_KEY } from "../../constants";

export type TodoContextData = {
  todos: TodoDTO[];
  createTodo: (data: CreateTodoDTO) => void;
  removeTodo: (todo_id: string) => void;
  toggleTodoComplete: (todo_id: string) => void;
};

export const TodoContext = createContext({} as TodoContextData);

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<TodoDTO[]>([
    {
      id: "one",
      isCompleted: true,
      name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias consequatur placeat tempore, voluptatum dicta quos consequuntur reprehenderit. Soluta nostrum laboriosam at nesciunt quis! Veniam quaerat quo dicta tempore possimus quas.",
    },
  ]);

  const toggleTodoComplete: TodoContextData["toggleTodoComplete"] = useCallback(
    (todo_id) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todo_id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

      setTodos(updatedTodos);

      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(updatedTodos));
    },
    [todos]
  );

  const removeTodo: TodoContextData["removeTodo"] = useCallback(
    (todo_id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todo_id);

      setTodos(updatedTodos);

      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(updatedTodos));
    },
    [todos]
  );

  const createTodo: TodoContextData["createTodo"] = useCallback(
    ({ name }) => {
      const newTodo = {
        id: Date.now().toString(),
        name,
        isCompleted: false,
      };

      const updatedTodos = [...todos, newTodo];

      setTodos(updatedTodos);

      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(updatedTodos));
    },
    [todos]
  );

  useLayoutEffect(() => {
    const storagedTodos = localStorage.getItem(TODO_STORAGE_KEY);

    if (!storagedTodos) return;

    setTodos(JSON.parse(storagedTodos));
  }, []);

  const contextData = useMemo<TodoContextData>(
    () => ({ todos, toggleTodoComplete, removeTodo, createTodo }),
    [todos, toggleTodoComplete, removeTodo, createTodo]
  );

  return (
    <TodoContext.Provider value={contextData}>{children}</TodoContext.Provider>
  );
};
