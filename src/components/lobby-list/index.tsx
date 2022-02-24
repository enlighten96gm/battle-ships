import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { apiService } from '../../constants/network';
import { ApplicationRoutes } from '../../constants/routes.constants';
import * as Styled from './lobby-list.styles';

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
              <Styled.CurrentLobby
                onClick={handleAcceptLobbyInvitation}
                key={index}
              >
                {item}
              </Styled.CurrentLobby>
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
  }, [lobbyArray]);

  return (
    <>
      <Styled.LobbyContainer>
        <Styled.Title>Lobby list</Styled.Title>
        {renderList()}
      </Styled.LobbyContainer>
    </>
  );
};

export default LobbyList;
