import React from 'react';
import { apiService } from '../../constants/network';
import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { ApplicationRoutes } from '../../constants/routes.constants';
import * as Styled from './create-lobby.styles';

const CreateLobbyPage: React.FC = () => {
  const [room, setRoom] = useState<string>('');
  const history = useNavigate();

  const handleCreateLobby = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      apiService.joinLobby('join', room);
      history(generatePath(ApplicationRoutes.GamePage, { id: room }));
      setRoom('');
    }
  };

  const handleEnterLobbyName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoom(event.target.value);
  };

  return (
    <>
      <Styled.CreateContainer>
        <Styled.Title>Create lobby</Styled.Title>
        <Styled.CreateInput
          onChange={handleEnterLobbyName}
          onKeyDown={handleCreateLobby}
          placeholder='Enter lobby name'
          value={room}
        />
      </Styled.CreateContainer>
    </>
  );
};

export default CreateLobbyPage;
