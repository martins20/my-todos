import styled from "styled-components";

export const Container = styled.b`
  margin-left: 0.5rem;

  border-radius: 999px;
  background: ${({ theme }) => theme.dynamic.gray400};
  color: ${({ theme }) => theme.dynamic.gray200};

  padding: 0.25rem 0.5rem;
`;
