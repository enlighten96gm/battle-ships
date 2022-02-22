import React, { ChangeEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { apiService } from '../../constants/network';
import { FieldWithShips, PlaceBoat } from '../../shared/game-supliments/indes';
// import { Square } from '../../shared/game-supliments/indes';

const GamePage: React.FC = () => {
  const [state, setState] = useState<string[]>(['lol', 'kek']);
  const [message, setMessage] = useState('');
  const [boat, setBoat] = useState('1');
  const [firstBoatPosition, setFirstBoatPosition] = useState('');
  const [secondBoatPosition, setSecondBoatPosition] = useState('');
  const location = useLocation();
  const currentRoom =
    location.pathname.split('/')[location.pathname.split('/').length - 1];

  const handleSendMessage = () => {
    apiService.send('send', message, currentRoom);
    setState((prevState) => [...prevState, message]);
    setMessage('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    apiService.receive('receive-message', message, setState);
  }, []);

  const handleCurrentShip = (event: React.MouseEvent) => {
    const { innerHTML } = event.target as HTMLDivElement;
    setBoat(innerHTML);
  };

  const handleFirstBoatPosition = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstBoatPosition(event.target.value);
  };

  const handleSecondBoatPosition = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondBoatPosition(event.target.value);
  };

  const handlePlaceBoat = () => {
    PlaceBoat(firstBoatPosition, secondBoatPosition, boat);
  };

  return (
    <>
      <CreateGameContainer>
        <Title>Game page</Title>
        <GameContainer>
          <YourContainer>
            <Title>You</Title>
            <SuperInput
              onChange={handleInputChange}
              placeholder='lol'
              value={message}
            />
            {/* <GameField></GameField> */}
            <Letters>
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(
                (item) => {
                  return <div>{item}</div>;
                }
              )}
            </Letters>
            <FieldWithShips />
            <BoatField>
              <BoatButtons>
                {['1', '2', '3', '4'].map((item) => {
                  return <div onClick={handleCurrentShip}>{item}</div>;
                })}
              </BoatButtons>
              <BoatInputsContainer>
                <div>Chosen boat {boat}</div>
                <input
                  type='text'
                  placeholder='Enter first pos'
                  onChange={handleFirstBoatPosition}
                  value={firstBoatPosition}
                />
                <input
                  disabled={boat === '1' ? true : false}
                  type='text'
                  placeholder='Enter second pos'
                  onChange={handleSecondBoatPosition}
                  value={secondBoatPosition}
                />
                <PlaceBoatButton onClick={handlePlaceBoat}>
                  Place
                </PlaceBoatButton>
              </BoatInputsContainer>
            </BoatField>
            <Button onClick={handleSendMessage}>Send</Button>
            {state.map((item) => {
              return <div>{item}</div>;
            })}
          </YourContainer>
          <EnemyContainer>
            <Title>Enemy</Title>
          </EnemyContainer>
        </GameContainer>
      </CreateGameContainer>
    </>
  );
};

export default GamePage;

const CreateGameContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 5px 20px 2px;
  background: rgba(200, 200, 200, 0.2);
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px dotted black;
  flex-direction: column;
  font-weight: bold;
  text-transform: uppercase;
  height: 5%;
`;

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  > :first-child {
    border-right: 1px solid black;
  }
`;

const YourContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const EnemyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameField = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 400px;
  height: 400px;
  background: pink;
`;
const BoatField = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  background: yellowgreen;
  * {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
`;
const BoatButtons = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  * {
    cursor: pointer;
    border: 1px solid red;
  }
`;

const BoatInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  gap: 5px;
`;

const SuperInput = styled.input`
  width: 100%;
  height: 50px;
`;

const Button = styled.div`
  width: 50%;
  height: 50px;
  border: 1px solid black;
`;

const Letters = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(10, 1fr);
  * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PlaceBoatButton = styled.div`
  height: 30px;
  width: 100%;
  border: 1px solid black;
  background: white;
`;
