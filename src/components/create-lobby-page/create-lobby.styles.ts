import styled from 'styled-components';

export const CreateContainer = styled.div`
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

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px dotted black;
  font-weight: bold;
  text-transform: uppercase;
  height: 20%;
  width: 100%;
`;

export const CreateInput = styled.input`
  height: 50px;
  outline: none;
  font-size: 30px;
`;
