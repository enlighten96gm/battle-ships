import styled from 'styled-components';
export const LobbyContainer = styled.div`
  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 5px 20px 2px;
  background: rgba(200, 200, 200, 0.2);
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px dotted black;
  font-weight: bold;
  text-transform: uppercase;
  height: 50px;
`;

export const CurrentLobby = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  cursor: pointer;
  &:hover {
    background: rgba(100, 20, 100, 0.4);
  }
`;
