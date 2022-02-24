import styled from 'styled-components';

export const CreateGameContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 5px 20px 2px;
  background: rgba(200, 200, 200, 0.2);
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px dotted black;
  flex-direction: column;
  font-weight: bold;
  text-transform: uppercase;
  height: 5%;
`;

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  > :first-child {
    border-right: 1px solid black;
  }
`;

export const YourContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EnemyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GameField = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 400px;
  height: 400px;
  background: pink;
`;
export const BoatField = styled.div`
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
export const BoatButtons = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  * {
    cursor: pointer;
    border: 1px solid red;
  }
`;

export const BoatInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  gap: 5px;
`;

export const SuperInput = styled.input`
  width: 100%;
  height: 50px;
`;

export const Button = styled.div`
  width: 50%;
  height: 50px;
  border: 1px solid black;
`;

export const Letters = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(10, 1fr);
  * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PlaceBoatButton = styled.div`
  height: 30px;
  width: 100%;
  border: 1px solid black;
  background: white;
`;

export const ShipsContainer = styled.div`
  margin-left: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  * {
    border: 1px solid black;
    cursor: pointer;
  }
`;

export const ReadyButton = styled.div`
  border: 1px solid black;
`;
