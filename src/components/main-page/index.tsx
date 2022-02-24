import { useNavigate } from 'react-router-dom';
import { ApplicationRoutes } from '../../constants/routes.constants';
import * as Styled from './main-page.styles';

const MainPage: React.FC = () => {
  const history = useNavigate();

  const findGameHandler = () => {
    history(ApplicationRoutes.LobbyList);
  };

  const createGameHandler = () => {
    history(ApplicationRoutes.CreateLobby);
  };

  return (
    <>
      <Styled.RouteContainer>
        <Styled.Button onClick={findGameHandler}>Find Game</Styled.Button>
        <Styled.Button onClick={createGameHandler}>Create Game</Styled.Button>
      </Styled.RouteContainer>
    </>
  );
};

export default MainPage;
