import React from 'react';
import styled from 'styled-components';
import { apiService } from '../../constants/network';
import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { ApplicationRoutes } from '../../constants/routes.constants';

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
      <CreateContainer>
        <Title>Create lobby</Title>
        <CreateInput
          onChange={handleEnterLobbyName}
          onKeyDown={handleCreateLobby}
          placeholder='Enter lobby name'
          value={room}
        />
      </CreateContainer>
    </>
  );
};

export default CreateLobbyPage;

const CreateContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 5px 20px 2px;
  background: rgba(200, 200, 200, 0.2);
  > :last-child {
    width: 90%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px dotted black;
  font-weight: bold;
  text-transform: uppercase;
  height: 20%;
  width: 100%;
`;

const CreateInput = styled.input`
  height: 50px;
  outline: none;
  font-size: 30px;
`;
