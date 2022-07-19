import { FC } from "react";
import { Container } from "./styles";

export type CounterProps = {
  count: number;
  to?: number;
};

export const Counter: FC<CounterProps> = ({ count, to }) => {
  return <Container>{to ? `${count} de ${to}` : count}</Container>;
};
