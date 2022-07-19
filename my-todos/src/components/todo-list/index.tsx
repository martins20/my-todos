import { Counter } from "../counter";
import {
  Container,
  CreatedTaskContainer,
  CompletedTaskContainer,
} from "./styles";

export const TodoList = () => {
  return (
    <Container>
      <header>
        <CreatedTaskContainer>
          <b>Tarefas criadas</b>
          <Counter count={5} />
        </CreatedTaskContainer>

        <CompletedTaskContainer>
          <b>Concluídas</b>
          <Counter count={1} to={5} />
        </CompletedTaskContainer>
      </header>
    </Container>
  );
};
