import { GrAddCircle } from "react-icons/gr";
import styled from "styled-components";
import { inputHeightInREM } from "../../components/input/styles";

export const Container = styled.main`
  display: flex;

  flex-direction: column;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;

  max-width: 750px;
  width: 100%;

  margin-top: -${inputHeightInREM / 2}rem;

  > header {
    display: flex;
    align-items: center;

    gap: 0.5rem;
    margin-bottom: 4rem;

    > button {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      padding: 1rem;
      border-radius: 8px;

      background: ${({ theme }) => theme.fixed.blue500};

      border: 0;

      font-weight: bold;
      color: ${({ theme }) => theme.dynamic.gray100};

      transition: background 0.1s;

      :hover,
      :active {
        background: ${({ theme }) => theme.fixed.blue600};
      }

      :disabled {
        background: ${({ theme }) => theme.dynamic.gray300};
        cursor: not-allowed;
      }
    }
  }
`;
