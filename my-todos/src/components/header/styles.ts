import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.dynamic.gray700};

  svg {
    width: 7.875rem;
    height: 3rem;
  }

  height: 200px;
`;
