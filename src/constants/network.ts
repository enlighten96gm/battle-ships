import webSocket from 'socket.io-client';

export const ENDPOINT: string = 'http://localhost:2345/';

// APi base url except endpoind
// Все евенты в константы
//

export const apiService = {
  socketInit: webSocket(ENDPOINT),

  joinLobby: function (event = 'join', lobby: string) {
    return this.socketInit.emit(event, lobby);
  },
  getLobbyCount: function (
    event = 'count',
    setLobbyCount: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    return this.socketInit.on(event, (data) => {
      setLobbyCount(() => [...data]);
      // оставлять на своем уровне
    });
  },
  send: function (event = 'send', message: string, room: string) {
    return this.socketInit.emit(event, message, room);
  },
  receive: function (
    event = 'receive-message',
    message: string,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    return this.socketInit.on(event, (data) => {
      setState((prevState) => [...prevState, data]);
      // оставлять на своем уровне
    });
  },
};
//  делить сервисы по предм облостям
