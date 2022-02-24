import React, { ChangeEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apiService } from '../../constants/network';
import { FieldWithShips, PlaceBoat } from './game-supliments/indes';
import * as Styled from './game-page.styles';

const GamePage: React.FC = () => {
  const [state, setState] = useState<string[]>(['lol', 'kek']);
  const [message, setMessage] = useState('');
  const [boat, setBoat] = useState('1');
  const [firstBoatPosition, setFirstBoatPosition] = useState('');
  const [secondBoatPosition, setSecondBoatPosition] = useState('');
  const [shipsState, setShipsState] = useState([
    '1',
    '1',
    '1',
    '1',
    '2',
    '2',
    '2',
    '3',
    '3',
    '4',
  ]);

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
    setFirstBoatPosition('');
    setSecondBoatPosition('');
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
    const currentBoat = PlaceBoat(firstBoatPosition, secondBoatPosition, boat);
    setShipsState((array) => {
      const finalArray = [...array];
      const deleteI = finalArray.findIndex((boat) => boat === currentBoat);
      return [
        ...finalArray.slice(0, deleteI),
        ...finalArray.slice(deleteI + 1, finalArray.length),
      ];
    });
  };

  return (
    <>
      <Styled.CreateGameContainer>
        <Styled.Title>Game page</Styled.Title>
        <Styled.GameContainer>
          <Styled.YourContainer>
            <Styled.Title>You</Styled.Title>
            <Styled.SuperInput
              onChange={handleInputChange}
              placeholder='lol'
              value={message}
            />
            {/* <GameField></GameField> */}
            <Styled.Letters>
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(
                (item) => {
                  return <div>{item}</div>;
                }
              )}
            </Styled.Letters>
            <FieldWithShips />
            <Styled.BoatField>
              <Styled.BoatInputsContainer>
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
                <Styled.PlaceBoatButton onClick={handlePlaceBoat}>
                  Place
                </Styled.PlaceBoatButton>
              </Styled.BoatInputsContainer>
              <Styled.ShipsContainer>
                {shipsState.length > 0 ? (
                  shipsState.map((item) => {
                    return <div onClick={handleCurrentShip}>{item}</div>;
                  })
                ) : (
                  <Styled.ReadyButton>Ready</Styled.ReadyButton>
                )}
              </Styled.ShipsContainer>
            </Styled.BoatField>
            <Styled.Button onClick={handleSendMessage}>Send</Styled.Button>
            {state.map((item) => {
              return <div>{item}</div>;
            })}
          </Styled.YourContainer>
          <Styled.EnemyContainer>
            <Styled.Title>Enemy</Styled.Title>
          </Styled.EnemyContainer>
        </Styled.GameContainer>
      </Styled.CreateGameContainer>
    </>
  );
};

export default GamePage;
