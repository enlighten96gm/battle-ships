import { useState } from 'react';
import styled from 'styled-components';
const gameField = [
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
];

const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export interface SquareType {
  field: string;
  fieldIndex: number;
}

export const PlaceBoat = (
  firstPos: string,
  secondPos: string,
  currentBoat: string
) => {
  const firstX = firstPos.split('')[0];
  const firstY = firstPos.split('')[1];
  const secondX = secondPos.split('')[0];
  const secondY = secondPos.split('')[1];
  let boatLength;

  let firstLetterPos = 0;
  let secondLetterPos = 0;
  letterArray.forEach((item, index) => {
    if (firstX.toLocaleUpperCase() === item) {
      firstLetterPos = index + 1;
    }
    if (secondPos) {
      if (secondX.toLocaleUpperCase() === item) {
        secondLetterPos = index + 1;
      }
    }
  });
  if (secondPos) {
    if (firstX === secondX) {
      boatLength = Math.abs(Number(firstY) - Number(secondY)) + 1;
    } else if (firstY === secondY) {
      if (firstLetterPos && secondLetterPos) {
        boatLength = Math.abs(firstLetterPos - secondLetterPos) + 1;
      }
    } else {
      throw new Error('Wrong coords');
    }
    if (boatLength === Number(currentBoat)) {
      if (firstX === secondX) {
        for (let i = 0; i < gameField.length; i++) {
          for (let j = 0; j < gameField[i].length; j++) {
            if (i + 1 >= Number(firstY) && i + 1 <= Number(secondY)) {
              if (j + 1 === firstLetterPos || j + 1 === secondLetterPos) {
                // Если ряядом корабль логика

                gameField[i][j] = currentBoat;
              }
            }
          }
        }
      } else {
        for (let i = 0; i < gameField.length; i++) {
          for (let j = 0; j < gameField[i].length; j++) {
            if (i + 1 === Number(firstY) || i + 1 === Number(secondY)) {
              if (j + 1 >= firstLetterPos && j + 1 <= secondLetterPos) {
                // Если ряядом корабль логика

                gameField[i][j] = currentBoat;
              }
            }
          }
        }
      }
      console.log(gameField);
      // Logic here
    } else {
      // Error here if length wrong
      throw new Error('You entered wrong boat length');
    }
  } else {
    console.log(firstLetterPos, firstY);

    for (let i = 0; i < gameField.length; i++) {
      for (let j = 0; j < gameField[i].length; j++) {
        if (i + 1 === Number(firstY)) {
          if (j + 1 === firstLetterPos) {
            gameField[i][j] = currentBoat;
          }
        }
      }
    }
  }
};

export const FieldWithShips: React.FC = () => {
  const renderField = () => {
    return gameField.map((item, index) => {
      return item.map((field, fieldIndex) => {
        return <Square field={field} fieldIndex={fieldIndex} />;
      });
    });
  };

  return <Container>{renderField()}</Container>;
};

export const Square: React.FC<SquareType> = ({ field, fieldIndex }) => {
  return <SquareContainer field={field}></SquareContainer>;
};

const Container = styled.div`
  background: white;
  border: 1px solid blue;
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

const SquareContainer = styled.div<{ field: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: ${({ field }) => (field ? 'black' : 'none')};
`;
