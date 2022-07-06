import styled, { css } from "styled-components";

export const inputHeightInREM = 54 / 16;

type ContainerProps = {
  isFilled: boolean;
};

export const Container = styled.input<ContainerProps>`
  width: 100%;

  padding: 0 1rem;

  background: ${({ theme }) => theme.dynamic.gray500};
  border: 1px solid ${({ theme }) => theme.dynamic.gray700};

  border-radius: 8px;
  height: ${inputHeightInREM}rem;
  font-size: 1rem;

  color: ${({ theme }) => theme.dynamic.gray100};

  transition: border-color 0.3s;

  :focus {
    border-color: ${({ theme }) => theme.fixed.blue500};

    ${({ theme, isFilled }) =>
      isFilled &&
      css`
        border-color: ${theme.fixed.blue600};
      `}
  }

  ${({ theme, isFilled }) =>
    isFilled &&
    css`
      border-color: ${theme.fixed.blue600};
    `}
`;
