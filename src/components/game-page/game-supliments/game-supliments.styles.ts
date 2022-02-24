import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  border: 1px solid blue;
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

export const SquareContainer = styled.div<{ field: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: ${({ field }) => (field ? 'black' : 'none')};
`;
