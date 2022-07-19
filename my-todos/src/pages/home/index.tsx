import { ChangeEvent, useCallback, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

import { Header, Input, TodoList } from "../../components";
import { useTodo } from "../../hooks/use-todo";

import { Container, Content } from "./styles";

export const Home = () => {
  const [todoName, setTodoName] = useState("");

  const { todos, createTodo } = useTodo();

  const handleChangeTodoName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTodoName(event.target.value);
    },
    []
  );

  const handleCreateTodo = () => {
    if (!todoName) return;

    createTodo({ name: todoName });

    setTodoName("");
  };

  return (
    <Container>
      <Header />
      <Content>
        <header>
          <Input
            value={todoName}
            onChange={handleChangeTodoName}
            placeholder="Adicione uma nova tarefa"
          />

          <button onClick={handleCreateTodo}>
            Criar
            <MdAddCircleOutline size={16} />
          </button>
        </header>

        <TodoList todos={todos} />
      </Content>
    </Container>
  );
};
