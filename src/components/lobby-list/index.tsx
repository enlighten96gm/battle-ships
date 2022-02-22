import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apiService } from '../../constants/network';
import { ApplicationRoutes } from '../../constants/routes.constants';

const LobbyList: React.FC = () => {
  const [lobbyArray, setLobbyArray] = useState<string[]>([]);
  const history = useNavigate();

  const handleAcceptLobbyInvitation = (event: React.MouseEvent) => {
    const { innerHTML } = event.target as HTMLDivElement;
    apiService.joinLobby('join', innerHTML);
    history(generatePath(ApplicationRoutes.GamePage, { id: innerHTML }));
  };

  const renderList = () => {
    if (lobbyArray.length) {
      return (
        <>
          {lobbyArray.map((item, index) => {
            return (
              <CurrentLobby onClick={handleAcceptLobbyInvitation} key={index}>
                {item}
              </CurrentLobby>
            );
          })}
        </>
      );
    } else {
      return <div>Lol create smt.</div>;
    }
  };

  useEffect(() => {
    apiService.getLobbyCount('count', setLobbyArray);
    console.log(lobbyArray);
  }, [lobbyArray]);

  return (
    <>
      <LobbyContainer>
        <Title>Lobby list</Title>
        {renderList()}
      </LobbyContainer>
    </>
  );
};

export default LobbyList;

const LobbyContainer = styled.div`
  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 5px 20px 2px;
  background: rgba(200, 200, 200, 0.2);
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px dotted black;
  font-weight: bold;
  text-transform: uppercase;
  height: 50px;
`;

const CurrentLobby = styled.div`
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
