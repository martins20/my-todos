import styled from "styled-components";

export const Container = styled.section`
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > main {
    margin-top: 2rem;
    height: 100%;

    overflow-y: auto;
  }
`;

export const CreatedTaskContainer = styled.section`
  > b {
    :first-child {
      color: ${({ theme }) => theme.fixed.blue500};
    }
  }
`;

export const CompletedTaskContainer = styled.section`
  > b {
    :first-child {
      color: ${({ theme }) => theme.fixed.purple600};
    }
  }
`;
