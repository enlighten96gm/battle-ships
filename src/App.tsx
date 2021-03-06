import React from 'react';
import styled from 'styled-components';
import AppRouter from './components/app-router';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <AppRouter />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  background: lavender;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
