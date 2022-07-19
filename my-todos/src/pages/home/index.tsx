import { MdAddCircleOutline } from "react-icons/md";

import { Header, Input, TodoList } from "../../components";

import { Container, Content } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <Input placeholder="Adicione uma nova tarefa" />

          <button>
            Criar
            <MdAddCircleOutline size={16} />
          </button>
        </header>

        <TodoList />
      </Content>
    </Container>
  );
};
