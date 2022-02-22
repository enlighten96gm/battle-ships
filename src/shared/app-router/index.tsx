import { ComponentType, ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import CreateLobbyPage from '../../components/create-lobby-page';
import GamePage from '../../components/game-page';
import LobbyList from '../../components/lobby-list';
import MainPage from '../../components/main-page';
import { ApplicationRoutes } from '../../constants/routes.constants';

export interface RouterInterface {
  name: string;
  path: string;
  element: ReactNode;
}

const routes: RouterInterface[] = [
  {
    name: 'main-page',
    path: ApplicationRoutes.MainPage,
    element: <MainPage />,
  },
  {
    name: 'create-lobby',
    path: ApplicationRoutes.CreateLobby,
    element: <CreateLobbyPage />,
  },
  {
    name: 'lobby-list',
    path: ApplicationRoutes.LobbyList,
    element: <LobbyList />,
  },
  {
    name: 'game-page',
    path: ApplicationRoutes.GamePage,
    element: <GamePage />,
  },
];

const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        {routes.map(({ name, path, element }) => {
          return <Route key={name} path={path} element={element} />;
        })}
        <Route path='/' element={<Navigate to='/main' />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
