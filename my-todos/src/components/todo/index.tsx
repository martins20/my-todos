import { FC } from "react";
import { CgTrash } from "react-icons/cg";

import { TodoDTO } from "../../dtos";

export type TodoProps = {
  data: TodoDTO;
  onCheck: (todo_id: string) => void;
  onDelete: (todo_id: string) => void;
};

import { Checkbox, Container, TodoName } from "./styles";

export const Todo: FC<TodoProps> = ({ data, onCheck, onDelete }) => {
  return (
    <Container>
      <Checkbox
        type="checkbox"
        checked={data.isCompleted}
        onChange={() => onCheck(data.id)}
      />

      <TodoName>{data.name}</TodoName>

      <button onClick={() => onDelete(data.id)}>
        <CgTrash />
      </button>
    </Container>
  );
};
