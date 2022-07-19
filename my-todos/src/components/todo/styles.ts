import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex: 1;

  gap: 0.75rem;

  background: ${({ theme }) => theme.dynamic.gray500};
  padding: 1rem;

  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.dynamic.gray400};

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  & + section {
    margin-top: 0.75rem;
  }

  > button {
    border: 0;
    line-height: 0;

    background: transparent;

    border-radius: 3px;

    cursor: pointer;

    &:hover {
      > svg {
        color: ${({ theme }) => theme.fixed.red500};
      }
    }

    > svg {
      color: ${({ theme }) => theme.dynamic.gray300};
      font-size: 1.5rem;

      transition: color 0.1s;
    }
  }
`;

export const TodoName = styled.h1`
  color: ${({ theme }) => theme.dynamic.gray100};
  font-size: 0.875rem;
  line-height: 1.4;
  font-weight: 400;

  width: 100%;

  text-align: justify;
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1.2rem;
  height: 1.2rem;

  min-width: 1.2rem;
  min-height: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.fixed.blue500};
  border-radius: 100%;
  transform: translateY(-0.075rem);

  display: grid;
  place-content: center;

  transition: border-color 0.1s;
  cursor: pointer;

  :before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    transform: scale(0);
    transition: 0.1s transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.dynamic.gray100};

    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  :checked {
    border-color: ${({ theme }) => theme.fixed.purple500};
    background: ${({ theme }) => theme.fixed.purple500};

    :before {
      transform: scale(1);
    }
  }

  :hover {
    border-color: ${({ theme }) => theme.fixed.purple500};
  }

  :disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }
`;
