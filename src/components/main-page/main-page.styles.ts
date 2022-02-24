import styled from 'styled-components';

export const RouteContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 30%;
  height: 20%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 5px 20px 2px;
  background: rgba(200, 200, 200, 0.2);
  > :first-child {
    border-bottom: 1px solid black;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgba(100, 20, 100, 0.4);
  }
`;
