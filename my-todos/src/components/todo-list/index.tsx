import { FC, useMemo } from "react";
import { TodoDTO } from "../../dtos";
import { useTodo } from "../../hooks/use-todo";
import { Counter } from "../counter";
import { Todo } from "../todo";
import {
  Container,
  CreatedTaskContainer,
  CompletedTaskContainer,
} from "./styles";

export type TodoListProps = {
  todos: TodoDTO[];
};

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  const { removeTodo, toggleTodoComplete } = useTodo();

  const completedTodosLength = useMemo(
    () => todos.filter((todo) => todo.isCompleted).length,
    [todos]
  );

  return (
    <Container>
      <header>
        <CreatedTaskContainer>
          <b>Tarefas criadas</b>
          <Counter count={completedTodosLength} />
        </CreatedTaskContainer>

        <CompletedTaskContainer>
          <b>Concluídas</b>
          <Counter count={completedTodosLength} to={todos.length} />
        </CompletedTaskContainer>
      </header>

      <main>
        {todos.map((todo) => (
          <Todo
            data={todo}
            key={todo.id}
            onCheck={toggleTodoComplete}
            onDelete={removeTodo}
          />
        ))}
      </main>
    </Container>
  );
};
